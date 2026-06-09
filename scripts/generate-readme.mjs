#!/usr/bin/env node
// =============================================================
// generate-readme.mjs — render the full README from catalog data
// =============================================================
// Source of truth:
//   - data/addons/*.md   → per-tool entries (grouped by `category`)
//   - data/sections.mjs  → section order, titles, anchors, intro/outro prose
//
// Output: README.md (overwritten). Edit the data, not the README.
// Run: `npm run gen`
// =============================================================

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import matter from 'gray-matter';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ADDONS_DIR = join(ROOT, 'data', 'addons');
const OUT_FILE = join(ROOT, 'README.md');

const REQUIRED = ['name', 'slug', 'category', 'platform', 'status', 'lastVerified', 'summary'];
const STATUS_RANK = { maintained: 0, unknown: 1, legacy: 2, dead: 3 };

function loadAddons() {
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
    const expected = file.replace(/\.md$/, '');
    if (data.slug && data.slug !== expected) {
      problems.push(`${file}: slug "${data.slug}" != filename "${expected}"`);
    }
    for (const l of data.links ?? []) {
      try { new URL(l.url); } catch { problems.push(`${file}: invalid url "${l?.url}"`); }
    }
    addons.push(data);
  }
  return { addons, problems };
}

function bySort(a, b) {
  if (!!a.recommended !== !!b.recommended) return a.recommended ? -1 : 1;
  const s = (STATUS_RANK[a.status] ?? 9) - (STATUS_RANK[b.status] ?? 9);
  if (s) return s;
  return a.name.localeCompare(b.name);
}

function renderAddon(a) {
  const badges = [];
  if (a.recommended) badges.push('✅ **recommended**');
  if (a.status === 'legacy') badges.push('*(legacy)*');
  if (a.status === 'dead') badges.push('⚠️ *(dead)*');
  if (a.status === 'unknown') badges.push('*(status unverified)*');
  if (a.platform === 'standalone') badges.push('`standalone`');
  if (a.platform === 'web') badges.push('`web`');
  if (a.blenderVersion) badges.push(`Blender ${a.blenderVersion}`);
  if (a.license) badges.push(a.license);
  if (a.emPipeline) badges.push('`EM pipeline`');

  const tail = badges.length ? ` — ${badges.join(' · ')}` : '';
  const links = (a.links ?? []).length
    ? ' ' + a.links.map((l) => `[${l.label}](${l.url})`).join(' · ')
    : '';
  const lines = [`- **${a.name}**${tail}`, `  ${a.summary}${links}`];
  if (a.image) lines.push('', `  ![${a.name}](<${a.image}>)`);
  return lines.join('\n');
}

function renderList(addons, category) {
  const items = addons.filter((a) => a.category === category).sort(bySort);
  return items.map(renderAddon);
}

async function main() {
  const { meta, sections } = await importSections();
  const { addons, problems } = loadAddons();
  if (problems.length) {
    console.error('⚠️  Validation problems:\n' + problems.map((p) => '  - ' + p).join('\n'));
  }

  const out = [];
  out.push(`# ${meta.title}`, '', meta.tagline, '', meta.intro, '');

  // Table of contents
  out.push('## Table of contents', '');
  for (const s of sections) out.push(`${s.n}. [${s.title}](#${s.anchor})`);
  out.push('');

  // Sections
  let toolCount = 0;
  for (const s of sections) {
    out.push(`## ${s.n}. ${s.title} <a name="${s.anchor}"></a>`, '');
    if (s.intro) out.push(s.intro, '');

    if (!s.noTools) {
      const subs = s.subsections ?? (s.category ? [{ category: s.category }] : []);
      for (const sub of subs) {
        if (sub.title) out.push(`### ${sub.title}`, '');
        const rendered = renderList(addons, sub.category);
        toolCount += rendered.length;
        if (rendered.length) out.push(...rendered, '');
      }
    }
    if (s.outro) out.push(s.outro, '');
  }

  out.push('---', '', `*Generated from ${addons.length} catalog entries. Last link verification: 2026-06-09.*`);

  writeFileSync(OUT_FILE, out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n', 'utf8');
  console.log(`✅ README.md generated — ${sections.length} sections, ${toolCount} tool listings, ${addons.length} data files.`);
}

async function importSections() {
  const mod = await import(pathToFileURL(join(ROOT, 'data', 'sections.mjs')).href);
  return { meta: mod.meta, sections: mod.sections };
}

await main();
