#!/usr/bin/env node
// =============================================================
// generate-readme.mjs — render catalog data into Markdown
// =============================================================
// GRADE 1 (proof of concept): reads data/addons/*.md and renders the
// "section 11" block (photogrammetry / point-cloud / gaussian-splatting)
// into data/_preview/section-11.md so you can see the shape before the full
// README/site migration.
//
// Source of truth = data/addons/*.md. Edit those, then `npm run gen`.
// =============================================================

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ADDONS_DIR = join(ROOT, 'data', 'addons');
const OUT_DIR = join(ROOT, 'data', '_preview');
const OUT_FILE = join(OUT_DIR, 'section-11.md');

// --- ordered category display config (PoC: the 3 section-11 categories) ---
const SECTION = {
  title: '## 11. Photogrammetry, point clouds and 3D Gaussian Splatting',
  categories: [
    { key: 'photogrammetry', title: '### Photogrammetry import' },
    { key: 'point-cloud', title: '### Point-cloud import' },
    { key: 'gaussian-splatting', title: '### 3D Gaussian Splatting (3DGS)' },
  ],
};

const REQUIRED = ['name', 'slug', 'category', 'platform', 'status', 'lastVerified', 'summary'];
const STATUS_RANK = { maintained: 0, unknown: 1, legacy: 2, dead: 3 };

// --- load + light validation ---
function load() {
  const files = readdirSync(ADDONS_DIR).filter((f) => f.endsWith('.md'));
  const addons = [];
  const problems = [];
  for (const file of files) {
    const { data } = matter(readFileSync(join(ADDONS_DIR, file), 'utf8'));
    for (const k of REQUIRED) {
      if (data[k] === undefined || data[k] === null || data[k] === '') {
        problems.push(`${file}: missing required field "${k}"`);
      }
    }
    const expectedSlug = file.replace(/\.md$/, '');
    if (data.slug && data.slug !== expectedSlug) {
      problems.push(`${file}: slug "${data.slug}" != filename "${expectedSlug}"`);
    }
    for (const l of data.links ?? []) {
      try {
        new URL(l.url);
      } catch {
        problems.push(`${file}: invalid url "${l?.url}"`);
      }
    }
    addons.push(data);
  }
  return { addons, problems };
}

// --- render one tool as a Markdown bullet ---
function renderAddon(a) {
  const badges = [];
  if (a.recommended) badges.push('✅ **recommended**');
  if (a.status === 'legacy') badges.push('*(legacy)*');
  if (a.status === 'dead') badges.push('⚠️ *(dead)*');
  if (a.status === 'unknown') badges.push('*(status unverified)*');
  if (a.blenderVersion) badges.push(`Blender ${a.blenderVersion}`);
  if (a.license) badges.push(a.license);
  if (a.emPipeline) badges.push('`EM pipeline`');

  const head = `**${a.name}**`;
  const tail = badges.length ? ` — ${badges.join(' · ')}` : '';
  const links = (a.links ?? []).length
    ? ' ' + a.links.map((l) => `[${l.label}](${l.url})`).join(' · ')
    : '';
  return `- ${head}${tail}\n  ${a.summary}${links}`;
}

function bySort(a, b) {
  if (!!b.recommended - !!a.recommended) return b.recommended ? 1 : -1;
  const s = (STATUS_RANK[a.status] ?? 9) - (STATUS_RANK[b.status] ?? 9);
  if (s) return s;
  return a.name.localeCompare(b.name);
}

function main() {
  const { addons, problems } = load();
  if (problems.length) {
    console.error('⚠️  Validation problems:\n' + problems.map((p) => '  - ' + p).join('\n'));
  }

  const lines = [
    SECTION.title,
    '',
    '> Generated from `data/addons/*.md` — do not edit by hand. Run `npm run gen`.',
    '',
  ];
  let count = 0;
  for (const cat of SECTION.categories) {
    const items = addons.filter((a) => a.category === cat.key).sort(bySort);
    if (!items.length) continue;
    lines.push(cat.title, '');
    for (const a of items) {
      lines.push(renderAddon(a));
      count++;
    }
    lines.push('');
  }

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, lines.join('\n').trimEnd() + '\n', 'utf8');
  console.log(`✅ Rendered ${count} tools → ${OUT_FILE.replace(ROOT + '/', '')}`);
}

main();
