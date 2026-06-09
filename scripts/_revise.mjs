#!/usr/bin/env node
// =============================================================
// _revise.mjs — ONE-TIME catalog revision (2026-06-09 link pass)
// =============================================================
// Driven by the fan-out web research: deletes defunct tools, adds verified
// current links, and points "now bundled in Blender" tools at the manual.
// After running once + `npm run gen`, this script can be deleted.
// =============================================================

import matter from 'gray-matter';
import { readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const D = join(ROOT, 'data', 'addons');
const f = (s) => join(D, s + '.md');

// --- 33 defunct → delete (all recorded in ARCHIVE.md) ---
const DELETE = [
  'pbr-cynicat', 'pbr-substance-like', 'pbr-node-v15', 'shader-library', 'ue4-shader',
  'sculpt-brushes', 'snap-advanced', 'shading-menu-header', 'texture-from-image',
  'texture-presets', 'xml-importer', 'photo-editing-tool', 'mega-shader', 'transpal',
  'eibriel-linker', 'move-uv', 'display-material-relations', 'oscurart-worn-edges',
  'rotation-constrained', 'multibake', 'vse-logging', 'blender-rebool', 'material-converter',
  'io-mesh-xyz', 'import-bundler', 'particle-morphing', 'texture-atlas', 'blend-library',
  'blender-cloud-textures', 'bpainter', 'easypbr', 'quipcam', 'blenderguru-12-addons',
];

// --- 34 verified current homes → add link ---
const LINKS = {
  '3d-survey-collection': ['GitHub', 'https://github.com/zalmoxes-laran/3D-survey-collection'],
  'advanced-boomsmash': ['GitHub', 'https://github.com/lucianomunoz/AdvancedBoomsmash'],
  'booltron': ['Blender Extensions', 'https://extensions.blender.org/add-ons/booltron/'],
  'capsule': ['GitHub', 'https://github.com/Takanu/Capsule'],
  'camera-image-plane': ['Website', 'https://cwolf3d.gumroad.com/l/scripts-create-camera-image-plane'],
  'enhanced-3d-cursor': ['GitHub', 'https://github.com/dairin0d/enhanced-3d-cursor'],
  'intersection-addon': ['Website', 'http://airplanes3d.net/scripts-253_e.xml'],
  'floorboard-generator': ['GitHub', 'https://github.com/importbpy/Floorboard-Generator'],
  'gaffer': ['GitHub', 'https://github.com/gregzaal/Gaffer'],
  'is-key-free': ['Blender Extensions', 'https://extensions.blender.org/add-ons/is-key-free/'],
  'luminance-hdr': ['GitHub', 'https://github.com/LuminanceHDR/LuminanceHDR'],
  'flip-animation': ['GitHub', 'https://github.com/kayy/FlipAnimation'],
  'laser-slicer': ['GitHub', 'https://github.com/rgsouthall/laser_slicer'],
  'mesh-snap-utilities-line': ['Blender Extensions', 'https://extensions.blender.org/add-ons/snap-utilities-line/'],
  'modifier-manager': ['Blender Extensions', 'https://extensions.blender.org/add-ons/modifier-tools/'],
  'planarizer': ['GitHub', 'https://github.com/Klowner/blender-planarizer'],
  'prolightskies': ['Website', 'https://www.blenderguru.com/install-pro-lighting-skies'],
  'retopoflow': ['GitHub', 'https://github.com/CGCookie/retopoflow'],
  'pbr-thesis-sairiala': ['Thesis', 'https://www.theseus.fi/handle/10024/102448'],
  'screencast-keys': ['Blender Extensions', 'https://extensions.blender.org/add-ons/screencast-keys/'],
  'slope-vertex': ['GitHub', 'https://github.com/varkenvarken/blenderaddons'],
  'xnormal': ['Website', 'https://xnormal.net/'],
  'zero-brush': ['Website', 'https://blendersensei.com/zero-brush/'],
  'asset-sketcher': ['Superhive', 'https://superhivemarket.com/products/asset-brush'],
  'baketools-paid': ['Superhive', 'https://superhivemarket.com/products/baketool'],
  'color-master': ['Superhive', 'https://superhivemarket.com/products/colormaster'],
  'lodscape': ['Superhive', 'https://superhivemarket.com/products/lodscape-lod-tools'],
  'object-cross-section': ['Website', 'https://dsculptor.gumroad.com/l/cross_section'],
  'drop-to-ground': ['GitHub', 'https://github.com/hannesdelbeke/drop-it-blender-addon'],
  'space-view-brush': ['Blender Extensions', 'https://extensions.blender.org/add-ons/dynamic-brush-menus/'],
  'circumferences-three-points': ['Blender Extensions', 'https://extensions.blender.org/add-ons/tinycad-mesh-tools/'],
  'fbx-bundle': ['GitHub', 'https://github.com/V-Sekai/V-Sekai.blender-addon-fbx-bundle'],
  'keyframes-quick-tools': ['GitHub', 'https://github.com/quollism/blender-keyframetools'],
  'meltdown': ['GitHub', 'https://github.com/MadMinstrel/meltdown'],
};

// --- 6 now bundled in Blender → link to the manual, mark maintained ---
const BUILTIN = {
  'add-dimension': 'https://docs.blender.org/manual/en/4.1/addons/mesh/edit_mesh_tools.html',
  'apply-shape-keys': 'https://docs.blender.org/manual/en/latest/animation/shape_keys/shape_keys_panel.html',
  'blender-carver': 'https://docs.blender.org/manual/en/4.1/addons/object/carver.html',
  'rename-addon': 'https://docs.blender.org/manual/en/latest/files/blend/rename.html',
  'sun-position': 'https://docs.blender.org/manual/en/4.1/addons/lighting/sun_position.html',
  'vertex-index-viewer': 'https://docs.blender.org/manual/en/latest/editors/3dview/display/overlays.html',
};

// status corrections for revived-from-dead / old-but-available
const STATUS = {
  'advanced-boomsmash': 'legacy', 'fbx-bundle': 'legacy',
  'keyframes-quick-tools': 'legacy', 'meltdown': 'legacy',
};

// clean a stale TODO body now that we have the real link
const CONTENT = {
  '3d-survey-collection':
    '3DSC (distributed as the Blender extension `dsc_tools`) covers the 3D-survey side of\nthe pipeline: georeferencing, shift handling and exchange with EMTools. Part of the\nsame ExtendedMatrix ecosystem.\n',
};

function edit(slug, mutate) {
  const p = f(slug);
  if (!existsSync(p)) { console.warn('  ! missing:', slug); return false; }
  const g = matter(readFileSync(p, 'utf8'));
  mutate(g);
  writeFileSync(p, matter.stringify(g.content, g.data));
  return true;
}

let del = 0, lnk = 0, bi = 0;
for (const s of DELETE) { if (existsSync(f(s))) { rmSync(f(s)); del++; } else console.warn('  ! missing del:', s); }
for (const [s, [label, url]] of Object.entries(LINKS)) {
  if (edit(s, (g) => {
    g.data.links = [{ label, url }];
    if (STATUS[s]) g.data.status = STATUS[s];
    if (CONTENT[s] !== undefined) g.content = CONTENT[s];
  })) lnk++;
}
for (const [s, url] of Object.entries(BUILTIN)) {
  if (edit(s, (g) => { g.data.links = [{ label: 'Blender manual (bundled)', url }]; g.data.status = 'maintained'; })) bi++;
}
console.log(`✅ revise: deleted ${del}, linked ${lnk}, builtin ${bi}`);
