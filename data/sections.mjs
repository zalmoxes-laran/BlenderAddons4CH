// =============================================================
// sections.mjs — catalog structure (order, titles, anchors, prose)
// =============================================================
// Tools come from data/addons/*.md (grouped by `category`). This file owns
// everything that is NOT per-tool: the section order, the headings, the stable
// anchors (kept identical to the legacy README so inbound links still work),
// and any section intro/outro prose. Sections with `noTools: true` render only
// their intro. Sections with `subsections` group tools by category under
// sub-headings; otherwise a single `category` is listed flat.
// =============================================================

export const meta = {
  title: 'BlenderAddons4CH',
  tagline:
    'Blender add-ons for Cultural Heritage — a curated catalog of tools useful for documentation, modelling, photogrammetry, point clouds and visualization in CH workflows.',
  intro: [
    '> **Link status:** all links were verified on **2026-06-09**. Entries whose original',
    '> link was dead are marked `dead`/`legacy` and, where possible, point to the current',
    '> home of the tool.',
    '>',
    '> **This README is generated** from `data/addons/*.md` via `npm run gen` — do not edit',
    '> it by hand. Edit the per-tool data files instead. Long-form notes live in each tool\'s',
    '> Markdown body and surface on the companion site.',
  ].join('\n'),
};

export const sections = [
  { n: 1, title: 'Sites where to find add-ons', anchor: 'sites_addons', category: 'sites' },
  { n: 2, title: 'Texture painting', anchor: 'texture_painting', category: 'texturing' },
  { n: 3, title: 'Vertex painting', anchor: 'vertex_painting', category: 'vertex-paint' },
  { n: 4, title: 'Sculpting', anchor: 'sculpting', category: 'sculpting' },
  { n: 5, title: 'Materials', anchor: 'materials', category: 'materials' },
  {
    n: 6,
    title: 'PBR materials and the FOSS ecosystem around Blender',
    anchor: 'pbr_materials',
    category: 'pbr',
    outro:
      'Standalone tools (marked `standalone`) are open companions to closed-source solutions for improving the PBR pipeline.',
  },
  {
    n: 7,
    title: 'Speed up modelling and procedural modelling',
    anchor: 'speedup_modelling',
    subsections: [
      { title: 'Modelling', category: 'modelling' },
      { title: 'Retopology / hard-surface modelling', category: 'retopology' },
    ],
  },
  { n: 8, title: 'UV mapping tools', anchor: 'uv_mapping', category: 'uv' },
  { n: 9, title: 'Enhance the 3D viewport interface', anchor: 'interface_3d', category: 'interface' },
  { n: 10, title: 'Baking tools', anchor: 'baking_tools', category: 'baking' },
  {
    n: 11,
    title: 'Photogrammetry, point clouds and 3D Gaussian Splatting',
    anchor: 'photogrammetry',
    intro:
      '> This is the core section for Cultural Heritage 3D workflows. The three areas —\n> **photogrammetric import**, **point-cloud import** and **3D Gaussian Splatting** —\n> were all re-verified on 2026-06-09.',
    subsections: [
      { title: 'Photogrammetry import', category: 'photogrammetry' },
      { title: 'Point-cloud import', category: 'point-cloud' },
      { title: '3D Gaussian Splatting (3DGS)', category: 'gaussian-splatting' },
    ],
  },
  { n: 12, title: 'Compositor', anchor: 'compositor', category: 'compositor' },
  { n: 13, title: 'Multi-user work in Blender', anchor: 'multi_user', category: 'multiuser' },
  { n: 14, title: 'Landscape management', anchor: 'landscape', category: 'gis-landscape' },
  { n: 15, title: 'Camera and rendering (static and video)', anchor: 'camera_rendering', category: 'camera' },
  { n: 16, title: 'Animation', anchor: 'animation', category: 'animation' },
  { n: 17, title: 'Connection to external libraries', anchor: 'external_libraries', category: 'libraries' },
  { n: 18, title: 'Coding', anchor: 'coding', category: 'coding' },
  {
    n: 19,
    title: 'Beautiful themes for Blender',
    anchor: 'themes',
    category: 'themes',
    intro: '*(empty — contributions welcome)*',
  },
  {
    n: 20,
    title: 'Startup file and configuration',
    anchor: 'startup_file',
    noTools: true,
    intro:
      'To be copied into `C:\\Users\\[USER]\\AppData\\Roaming\\Blender Foundation\\Blender\\[VERSION]\\config`.',
  },
  { n: 21, title: 'Paid / commercial add-ons', anchor: 'paid', category: 'paid' },
  { n: 22, title: 'Simulation', anchor: 'simulation', category: 'simulation' },
  { n: 23, title: 'Exporter / Importer', anchor: 'exporter_importer', category: 'exchange' },
  { n: 24, title: '2D plans and sections: derived-data creation', anchor: 'derived_data', category: 'derived-data' },
  {
    n: 25,
    title: 'BIM / HBIM (Building Information Modelling for Heritage)',
    anchor: 'bim_hbim',
    category: 'bim-hbim',
    outro:
      '> A typical HBIM pipeline pairs Bonsai with the photogrammetry / point-cloud tools in\n> [section 11](#photogrammetry): reconstruct or scan the asset, import the mesh / point\n> cloud, then model and enrich it as native IFC in Bonsai.',
  },
];
