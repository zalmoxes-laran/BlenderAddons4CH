#!/usr/bin/env node
// =============================================================
// seed-addons.mjs — ONE-TIME migration of the legacy README into data files
// =============================================================
// Writes data/addons/<slug>.md for every tool below, SKIPPING any file that
// already exists (so the hand-authored, richer section-11 files are preserved).
// After running once, the .md files are the source of truth and this script
// can be deleted.
// =============================================================

import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ADDONS_DIR = join(ROOT, 'data', 'addons');
const VERIFIED = '2026-06-09';
const L = (label, url) => ({ label, url });

// --- the full catalog (legacy README, structured) ---------------------------
const DATA = [
  // §1 sites
  { name: 'Blender Extensions Platform', slug: 'blender-extensions-platform', category: 'sites', platform: 'web', status: 'maintained', links: [L('Website', 'https://extensions.blender.org/')], summary: 'The official, current source for Blender add-ons (replaces the offline wiki.blender.org/Extensions:2.6).' },
  { name: 'Blender Add-on List', slug: 'blender-addon-list', category: 'sites', platform: 'web', status: 'legacy', links: [L('Website', 'http://blenderaddonlist.blogspot.it/')], summary: 'Collection with animated-GIF descriptions and download links (now largely outdated).' },
  { name: 'GitHub search: Blender + Python', slug: 'github-blender-python-search', category: 'sites', platform: 'web', status: 'maintained', links: [L('Search', 'https://github.com/search?l=Python&q=blender&type=Repositories&utf8=%E2%9C%93')], summary: 'Keyword search across 1700+ Blender/Python repositories.' },
  { name: '12 useful Blender add-ons (Blender Guru)', slug: 'blenderguru-12-addons', category: 'sites', platform: 'web', status: 'dead', summary: 'Old listicle — the original article is offline (June 2026).' },

  // §2 texturing
  { name: 'Brush library manager', slug: 'brush-library-manager', category: 'texturing', status: 'legacy', links: [L('Download', 'https://www.dropbox.com/s/2tr64y6w7sgolr7/vtools_libraryManager.py?dl=0')], summary: 'Manager script for a brush library.' },
  { name: 'Texture from Image', slug: 'texture-from-image', category: 'texturing', status: 'legacy', summary: 'Create a texture from an image.' },
  { name: 'Texture Paint Plus', slug: 'texture-paint-plus', category: 'texturing', status: 'legacy', links: [L('Download', 'https://github.com/artistCDMJ/texture_paint_plus/archive/master.zip')], summary: 'Texture-paint helpers by Bart Crouch et al.' },
  { name: 'Texture Presets', slug: 'texture-presets', category: 'texturing', status: 'legacy', summary: 'Quickly create images at power-of-two sizes (1024/2048/4096).' },
  { name: 'Zero Brush', slug: 'zero-brush', category: 'texturing', status: 'legacy', summary: 'Old free version of Zero Brush (now part of the invasive Sensei-free pack).' },
  { name: 'Brushes (xrg81)', slug: 'brushes-xrg81', category: 'texturing', status: 'legacy', links: [L('Download', 'https://github.com/xrg81/brushes')], summary: 'Brushes to append from a blend file.' },

  // §3 vertex-paint
  { name: 'Oscurart Worn Edges', slug: 'oscurart-worn-edges', category: 'vertex-paint', status: 'legacy', summary: 'Paint per-vertex color at wear areas (exposed edges) — great for wear maps.' },
  { name: 'Slope', slug: 'slope-vertex', category: 'vertex-paint', status: 'legacy', summary: 'Write face-slope values to a vertex group / color layer (also in BlenderGIS).' },
  { name: 'Transpal', slug: 'transpal', category: 'vertex-paint', status: 'legacy', summary: 'Vertex painting from visual rules and palettes (incl. from GIMP).' },

  // §4 sculpting
  { name: 'Sculpt Brushes', slug: 'sculpt-brushes', category: 'sculpting', status: 'legacy', summary: 'Collection of sculpting brushes, enabled with a button.' },
  { name: 'Space View Brush', slug: 'space-view-brush', category: 'sculpting', status: 'legacy', summary: 'Alt+V exposes all sculpting commands at hand.' },

  // §5 materials
  { name: 'Matalogue', slug: 'matalogue', category: 'materials', status: 'legacy', links: [L('Website', 'http://adaptivesamples.com/2015/08/04/introducing-matalogue/')], summary: 'Quickly jump between materials/node trees and scenes.' },
  { name: 'Display Material Relations', slug: 'display-material-relations', category: 'materials', status: 'legacy', summary: 'Visualize material relations.' },
  { name: 'Material Converter', slug: 'material-converter', category: 'materials', status: 'dead', summary: 'Converted Blender Internal (incl. Photoscan GLSL) materials to Cycles — deprecated.' },

  // §6 pbr
  { name: 'Real-time PBR (Clément Foucault branch)', slug: 'pbr-branch-foucault', category: 'pbr', status: 'maintained', links: [L('Website', 'http://www.clement-foucault.com/')], summary: 'The PBR branch by C. Foucault — long since merged into Blender as EEVEE.' },
  { name: 'easyPBR shader', slug: 'easypbr', category: 'pbr', status: 'dead', summary: 'PBR material node — original CG Cookie market link dead (marketplace closed).' },
  { name: 'UE4 Shader', slug: 'ue4-shader', category: 'pbr', status: 'legacy', summary: 'UE4-style shader.' },
  { name: 'Shader Library', slug: 'shader-library', category: 'pbr', status: 'legacy', summary: 'A shader library.' },
  { name: 'PBR (Substance-style)', slug: 'pbr-substance-like', category: 'pbr', status: 'legacy', summary: 'PBR material inspired by Substance; works with any metallic-roughness pipeline.' },
  { name: 'PBR Node v1.5', slug: 'pbr-node-v15', category: 'pbr', status: 'legacy', summary: 'A PBR node group.' },
  { name: 'PBR setup (after Cynicat)', slug: 'pbr-cynicat', category: 'pbr', status: 'legacy', summary: "A PBR setup made following Cynicat's tutorials." },
  { name: 'Blender Brit (PBR node pack)', slug: 'blender-brit', category: 'pbr', status: 'legacy', links: [L('Website', 'http://www.blenderbrit.co.uk/free-tool-pbr-node-pack/')], summary: 'Free PBR node pack (after Cynicat & Blender Guru).' },
  { name: 'Mega Shader (Stefano Scarioni)', slug: 'mega-shader', category: 'pbr', status: 'dead', summary: 'CC-BY mega shader — original link dead (June 2026).' },
  { name: 'PBR workflows in Cycles (Sairiala thesis)', slug: 'pbr-thesis-sairiala', category: 'pbr', status: 'legacy', summary: "Bachelor's thesis on PBR workflows in Cycles (Sairiala, 2015)." },
  { name: 'xNormal', slug: 'xnormal', category: 'pbr', platform: 'standalone', status: 'legacy', summary: 'High-to-low-poly map baker for many map types (Windows).' },
  { name: 'AwesomeBump', slug: 'awesomebump', category: 'pbr', platform: 'standalone', status: 'maintained', links: [L('GitHub', 'https://github.com/kmkolasinski/AwesomeBump')], summary: 'Open-source generator of metallic/roughness PBR maps.' },
  { name: 'Luminance HDR', slug: 'luminance-hdr', category: 'pbr', platform: 'standalone', status: 'maintained', summary: 'Open-source HDR creation from bracketed exposures/panoramas (ex-qtpfsgui).' },

  // §7 modelling
  { name: 'np_station', slug: 'np-station', category: 'modelling', status: 'legacy', links: [L('Forum', 'https://blenderartists.org/t/addon-np-station/686462')], summary: 'Precision drawing and placement workflow tools.' },
  { name: 'Cutaway material', slug: 'cutaway-material', category: 'modelling', status: 'legacy', links: [L('Blog', 'https://blendbits.blogspot.it/2017/02/the-cutaway-shader-free-blender-add-on.html')], summary: 'Cutaway shader for sectioning models.' },
  { name: 'Mesh Align Plus', slug: 'mesh-align-plus', category: 'modelling', status: 'maintained', links: [L('Releases', 'https://github.com/egtwobits/mesh-align-plus/releases')], summary: 'Precise alignment by picking geometry features.' },
  { name: 'Selective Unhide', slug: 'selective-unhide', category: 'modelling', status: 'legacy', links: [L('GitHub', 'https://github.com/RayMairlot/Selective-Unhide')], summary: 'Selectively unhide hidden objects.' },
  { name: 'Snap Advanced', slug: 'snap-advanced', category: 'modelling', status: 'legacy', summary: 'Advanced snapping helpers.' },
  { name: 'Drop to Ground', slug: 'drop-to-ground', category: 'modelling', status: 'legacy', summary: 'Drops selected objects onto the active object.' },
  { name: 'Planarizer', slug: 'planarizer', category: 'modelling', status: 'legacy', summary: 'Coplanarizes selected faces (median normal); fixes non-planar quads.' },
  { name: 'Rotation Constrained', slug: 'rotation-constrained', category: 'modelling', status: 'legacy', summary: 'Constrained-rotation helper.', image: 'files/tip rotation constrained.png' },
  { name: 'Circumferences from three points', slug: 'circumferences-three-points', category: 'modelling', status: 'legacy', summary: 'Build a circumference from three points.', image: 'files/3points.png' },
  { name: 'Object Cross Section', slug: 'object-cross-section', category: 'modelling', status: 'legacy', summary: 'Create cross-sections using the active object as cut plane.' },
  { name: 'Laser Slicer 0.7', slug: 'laser-slicer', category: 'modelling', status: 'legacy', summary: 'Make cross-sections and export an SVG for laser cutting.' },
  { name: 'Intersection', slug: 'intersection-addon', category: 'modelling', status: 'legacy', summary: 'Add the intersection with another mesh to the active object.' },
  { name: 'Geodesic distance between points', slug: 'geodesic-distances', category: 'modelling', status: 'legacy', links: [L('Article', 'http://www.blendernation.com/2016/03/03/calculating-distances-two-points-using-geodesic-paths/')], summary: 'Measure distances along geodesic paths on a surface.' },
  { name: 'Sverchok', slug: 'sverchok', category: 'modelling', status: 'maintained', links: [L('GitHub', 'https://github.com/nortikin/sverchok')], summary: 'Powerful node system for procedural/parametric modelling.' },
  { name: 'Floorboard generator', slug: 'floorboard-generator', category: 'modelling', status: 'legacy', summary: 'Generates floorboards.' },
  { name: 'Modular Tree', slug: 'modular-tree', category: 'modelling', status: 'maintained', links: [L('Releases', 'https://github.com/MaximeHerpin/modular_tree/releases')], summary: 'Procedural tree generator (v3).' },

  // §7 retopology
  { name: 'Box Cutter', slug: 'box-cutter', category: 'retopology', status: 'legacy', links: [L('Notes', 'https://masterxeon1001.com/2016/05/28/box-cutter-4-update-notes/')], summary: 'Fast cutting/boolean hard-surface workflow.' },
  { name: 'Blender Carver', slug: 'blender-carver', category: 'retopology', status: 'legacy', summary: 'Carving / boolean modelling tools.' },
  { name: 'Blender Rebool', slug: 'blender-rebool', category: 'retopology', status: 'legacy', summary: 'Repeated-boolean helper.' },
  { name: 'Booltron', slug: 'booltron', category: 'retopology', status: 'legacy', summary: 'Boolean add-on (union/difference/intersect on groups).' },
  { name: 'Bool Tool', slug: 'bool-tool', category: 'retopology', status: 'legacy', links: [L('Code', 'https://github.com/vitorbalbio/code')], summary: 'Direct booleans as well as via modifier.' },

  // §8 uv
  { name: 'TexTools for Blender', slug: 'textools', category: 'uv', status: 'legacy', links: [L('Bitbucket', 'https://bitbucket.org/renderhjs/textools-blender/')], summary: 'UV/texture toolset (baking, layout, checker maps).' },
  { name: 'Sure UV', slug: 'sure-uv', category: 'uv', status: 'legacy', links: [L('Dev file', 'https://developer.blender.org/F18724'), L('Forum', 'http://blenderartists.org/forum/showthread.php?236631-Addon-Simple-Box-UVW-Map-Modifier')], summary: 'Quick box/cube UV mapping for architecture.' },
  { name: 'Magic UV', slug: 'magic-uv', category: 'uv', status: 'maintained', links: [L('GitHub', 'https://github.com/nutti/Magic-UV')], summary: 'UV editing helpers; includes a bounding box in UV space.' },
  { name: 'Move UV', slug: 'move-uv', category: 'uv', status: 'legacy', summary: 'Move UVs from the 3D view.' },
  { name: 'UV Squares', slug: 'uv-squares', category: 'uv', status: 'legacy', links: [L('GitHub', 'https://github.com/Radivarig/UvSquares/'), L('Video', 'https://www.youtube.com/watch?v=oklmDQx17HI&feature=youtu.be')], summary: 'Reshape UV faces into grids/squares.' },
  { name: 'Multi-Object UV Editing', slug: 'multi-object-uv-editing', category: 'uv', status: 'legacy', links: [L('GitHub', 'https://github.com/ndee85/Multi-Object-UV-Editing')], summary: 'Edit UVs across multiple objects.' },

  // §9 interface
  { name: 'Mesh Snap Utilities Line', slug: 'mesh-snap-utilities-line', category: 'interface', status: 'legacy', summary: 'Draw lines with snapping (now partly built into Blender).' },
  { name: 'Screencast Keys', slug: 'screencast-keys', category: 'interface', status: 'legacy', summary: 'Show pressed keys on screen.' },
  { name: 'Modifier Manager', slug: 'modifier-manager', category: 'interface', status: 'legacy', summary: 'Manage modifiers across objects.' },
  { name: 'Enhanced 3D Cursor', slug: 'enhanced-3d-cursor', category: 'interface', status: 'legacy', summary: 'Extended 3D-cursor controls.' },
  { name: 'Shading menu in header', slug: 'shading-menu-header', category: 'interface', status: 'legacy', summary: 'Header shortcut for shading modes.' },
  { name: 'MeasureIt', slug: 'measureit', category: 'interface', status: 'maintained', links: [L('Blender Extensions', 'https://extensions.blender.org/add-ons/measureit/'), L('Author repo', 'https://github.com/Antonioya/blender')], summary: 'On-screen dimensions/measurements — now bundled in Blender.' },
  { name: 'Add Dimension', slug: 'add-dimension', category: 'interface', status: 'legacy', summary: 'Set an edge length arbitrarily.' },
  { name: 'Amaranth Toolset', slug: 'amaranth-toolset', category: 'interface', status: 'maintained', links: [L('Blender Extensions', 'https://extensions.blender.org/add-ons/amaranth/')], summary: 'Production quality-of-life tools (the old pablovazquez.org page is dead).' },
  { name: 'Rename', slug: 'rename-addon', category: 'interface', status: 'legacy', summary: 'Batch-rename helper.' },
  { name: 'Vertex Index Viewer', slug: 'vertex-index-viewer', category: 'interface', status: 'dead', summary: 'Show vertex indices — now built in (enable Developer Extras + index overlays).' },
  { name: 'Is Key Free', slug: 'is-key-free', category: 'interface', status: 'legacy', summary: 'Find an unused key for a shortcut.' },
  { name: 'Apply Shape Keys', slug: 'apply-shape-keys', category: 'interface', status: 'legacy', summary: 'Helper to apply shape keys.' },
  { name: 'Miscellaneous tools (lapineige)', slug: 'lapineige-addons', category: 'interface', status: 'maintained', links: [L('GitHub', 'https://github.com/lapineige/Blender_add-ons.git')], summary: 'A miscellany of small useful add-ons.' },

  // §10 baking
  { name: 'Multibake', slug: 'multibake', category: 'baking', status: 'legacy', summary: 'Bake selected objects into individual maps.' },
  { name: 'Meltdown', slug: 'meltdown', category: 'baking', status: 'legacy', summary: 'Improved baking UI.' },
  { name: 'Texture Atlas', slug: 'texture-atlas', category: 'baking', status: 'legacy', summary: 'Pack/bake multiple objects into a texture atlas (Campbell Barton et al.).' },

  // §12 compositor
  { name: 'Blender Quick Compositor', slug: 'blender-quick-compositor', category: 'compositor', status: 'legacy', links: [L('Website', 'http://www.blenderbrit.co.uk/quickcompositor/')], summary: 'Rapid compositing presets.' },
  { name: 'EasyFX', slug: 'easyfx', category: 'compositor', status: 'legacy', links: [L('Download', 'http://www.rymdnisse.net/download/blender-addons/easyfx/')], summary: 'Post-process renders quickly via compositor nodes.' },
  { name: 'Photo Editing Tool', slug: 'photo-editing-tool', category: 'compositor', status: 'legacy', summary: 'Edit images with compositor nodes (extra panel).' },
  { name: 'Color Ramp Dropper', slug: 'color-ramp-dropper', category: 'compositor', status: 'legacy', links: [L('Forum', 'https://blenderartists.org/forum/showthread.php?401806-Addon-v1-2-ColorRamp-Dropper-easily-select-color-values-for-ColorRamp-nodes&p=3071567#post3071567'), L('GitHub', 'https://github.com/qwenger/BAddons/tree/master/Node_ColorRampDropper')], summary: 'Sample a set of color-ramp values from an image.' },

  // §13 multiuser
  { name: 'Verse 2', slug: 'verse-blender', category: 'multiuser', status: 'legacy', links: [L('GitHub', 'https://github.com/verse/verse-blender')], summary: 'Server + client for collaborative modelling in one 3D space.' },

  // §14 gis-landscape
  { name: 'BlenderGIS', slug: 'blendergis', category: 'gis-landscape', status: 'maintained', emPipeline: true, tags: ['gis', 'georeferencing', 'dem'], links: [L('GitHub', 'https://github.com/domlysz/BlenderGIS.git')], summary: 'Import DEM/shapefiles/basemaps and georeference scenes — relevant to CH georeferencing.' },
  { name: 'Vegetation (grass)', slug: 'vegetation-grass', category: 'gis-landscape', status: 'legacy', links: [L('Website', 'http://www.3d-wolf.com/grass.html')], summary: 'Grass/vegetation setup (companion Google Doc no longer available).' },
  { name: 'LOD generation for terrains', slug: 'lod-terrains', category: 'gis-landscape', status: 'legacy', links: [L('Website', 'http://hugobarreira.weebly.com')], summary: 'Generate levels of detail for terrains.' },
  { name: 'Sun Position', slug: 'sun-position', category: 'gis-landscape', status: 'maintained', summary: 'Sun/sky positioning by date/time/location — bundled in Blender.' },
  { name: 'OSG Export', slug: 'osg-export', category: 'gis-landscape', status: 'legacy', links: [L('GitHub', 'https://github.com/cedricpinson/osgexport')], summary: 'Export to OpenSceneGraph.' },

  // §15 camera
  { name: 'Real Camera', slug: 'real-camera', category: 'camera', status: 'maintained', links: [L('Website', 'https://3d-wolf.com/products/camera.html')], summary: 'Physically-based camera settings for realistic rendering.' },
  { name: 'CameraImagePlane', slug: 'camera-image-plane', category: 'camera', status: 'legacy', summary: 'Create a projection plane in the camera.' },
  { name: 'Advanced Boomsmash', slug: 'advanced-boomsmash', category: 'camera', status: 'dead', summary: 'OpenGL-viewport video capture — original link dead (June 2026).' },
  { name: 'Orbit camera', slug: 'orbit-camera', category: 'camera', status: 'legacy', links: [L('GitHub', 'https://github.com/Antonioya/blender')], summary: 'Create a camera that orbits an object.' },

  // §16 animation
  { name: 'Blender Power Sequencer', slug: 'blender-power-sequencer', category: 'animation', status: 'maintained', links: [L('GitHub', 'https://github.com/GDquest/Blender-power-sequencer.git')], summary: 'Efficiency tools for the Video Sequence Editor.' },
  { name: 'Animation Nodes', slug: 'animation-nodes', category: 'animation', status: 'legacy', links: [L('GitHub', 'https://github.com/JacquesLucke/animation_nodes')], summary: 'Node-based procedural animation system.' },
  { name: 'Keyframes Quick Tools', slug: 'keyframes-quick-tools', category: 'animation', status: 'legacy', summary: 'Quick keyframe operations.' },
  { name: 'Flip Animation', slug: 'flip-animation', category: 'animation', status: 'legacy', summary: 'Mirror / flip an animation.' },
  { name: 'VSE logging system', slug: 'vse-logging', category: 'animation', status: 'legacy', summary: 'Logging system for the VSE.' },
  { name: 'Particle morphing tools', slug: 'particle-morphing', category: 'animation', status: 'dead', summary: 'Particle morphing (deprecated in recent versions).' },

  // §17 libraries
  { name: 'Blender Cloud textures', slug: 'blender-cloud-textures', category: 'libraries', status: 'legacy', summary: 'Use Blender Cloud textures out of the box (needs Blender ID + subscription).' },
  { name: 'Blend Library', slug: 'blend-library', category: 'libraries', status: 'dead', summary: 'Linked-asset library — wiki link dead; use the built-in Asset Browser.' },

  // §18 coding
  { name: 'XML Importer', slug: 'xml-importer', category: 'coding', status: 'legacy', summary: 'Import XML data.' },
  { name: 'Code Autocomplete', slug: 'code-autocomplete', category: 'coding', status: 'legacy', links: [L('Release', 'https://github.com/JacquesLucke/code_autocomplete/releases/tag/code_autocomplete_v2a')], summary: "Autocomplete for add-on development in Blender's text editor." },

  // §21 paid
  { name: 'ProLightSkies', slug: 'prolightskies', category: 'paid', license: 'commercial', status: 'legacy', summary: 'Photorealistic outdoor sky/lighting.' },
  { name: 'Color Master', slug: 'color-master', category: 'paid', license: 'commercial', status: 'legacy', summary: 'Color correction with a rich thumbnail preview section.' },
  { name: 'RetopoFlow', slug: 'retopoflow', category: 'paid', license: 'commercial', status: 'maintained', summary: 'In-Blender retopology toolkit (with tutorials).' },
  { name: 'Asset Sketcher', slug: 'asset-sketcher', category: 'paid', license: 'commercial', status: 'legacy', summary: 'Paint assets (e.g. trees) onto other geometry.' },
  { name: 'Baketools', slug: 'baketools-paid', category: 'paid', license: 'commercial', status: 'legacy', summary: 'Advanced, fast and precise baking tools.' },
  { name: 'Eibriel Linker', slug: 'eibriel-linker', category: 'paid', license: 'commercial', status: 'legacy', summary: 'Manage linked assets (needs its own particular setup).' },
  { name: 'Gaffer', slug: 'gaffer', category: 'paid', license: 'commercial', status: 'maintained', summary: 'Light management and tuning.' },
  { name: 'Lodscape', slug: 'lodscape', category: 'paid', license: 'commercial', status: 'legacy', summary: 'Automatic landscape LODs (needs clean topology, e.g. from DEM/Instant Meshes).' },
  { name: 'Capsule', slug: 'capsule', category: 'paid', license: 'commercial', status: 'legacy', summary: 'Rule-based FBX export of object groups.' },
  { name: 'BPainter', slug: 'bpainter', category: 'paid', license: 'commercial', status: 'maintained', summary: 'Advanced texture-painting suite for Blender.' },

  // §22 simulation
  { name: 'Modeling-Cloth', slug: 'modeling-cloth', category: 'simulation', status: 'legacy', links: [L('GitHub', 'https://github.com/the3dadvantage/Modeling-Cloth')], summary: 'Model and simulate cloth interactively.' },
  { name: 'Projectors', slug: 'projectors-ocupe', category: 'simulation', status: 'maintained', links: [L('GitHub', 'https://github.com/Ocupe/Projectors')], summary: 'Simulate projector light onto surfaces in 3D space.' },

  // §23 exchange
  { name: 'glTF Blender Exporter', slug: 'gltf-blender-exporter', category: 'exchange', status: 'maintained', links: [L('GitHub', 'https://github.com/KhronosGroup/glTF-Blender-Exporter')], summary: 'glTF import/export — now built into Blender.' },
  { name: 'FBX Bundle', slug: 'fbx-bundle', category: 'exchange', status: 'dead', summary: 'Batch FBX export — original link offline; moved to Superhive / Blender Market.' },

  // §24 derived-data
  { name: 'MeasureIt_ARCH', slug: 'measureit-arch', category: 'derived-data', status: 'maintained', emPipeline: true, tags: ['documentation', 'drawings', 'dxf'], links: [L('GitHub', 'https://github.com/kevancress/MeasureIt_ARCH?tab=readme-ov-file')], summary: 'Design documentation & technical drawings; export to images, vector graphics or DXF.' },

  // §25 bim-hbim
  { name: 'Bonsai (formerly BlenderBIM)', slug: 'bonsai', category: 'bim-hbim', status: 'maintained', recommended: true, emPipeline: true, license: 'GPL-3.0', tags: ['ifc', 'openbim', 'hbim', 'ifcopenshell'], links: [L('Site', 'https://bonsaibim.org/'), L('Blender Extensions', 'https://extensions.blender.org/add-ons/bonsai/'), L('Source', 'https://github.com/IfcOpenShell/IfcOpenShell'), L('Docs', 'https://docs.ifcopenshell.org/bonsai.html')], summary: 'Reference FOSS OpenBIM / native-IFC authoring platform — the key tool for HBIM.', body: 'A free, open-source, *native IFC* authoring platform: it reads, writes and analyses IFC\ndata directly (no lossy round-trip) through a UI built on the IfcOpenShell library. Lets\nyou attach structured, standards-based information to heritage geometry — surveyed\nelements, materials, phases, condition — and exchange it as IFC. Renamed from BlenderBIM\nto Bonsai in mid-2024.' },
];

// --- YAML serializer (constrained to our field shapes) -----------------------
const q = (s) => '"' + String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';

function frontmatter(a) {
  const out = [];
  out.push(`name: ${q(a.name)}`);
  out.push(`slug: ${q(a.slug)}`);
  out.push(`category: ${q(a.category)}`);
  out.push(`platform: ${q(a.platform ?? 'blender')}`);
  out.push(`status: ${q(a.status)}`);
  if (a.recommended) out.push('recommended: true');
  if (a.emPipeline) out.push('emPipeline: true');
  if (a.blenderVersion) out.push(`blenderVersion: ${q(a.blenderVersion)}`);
  if (a.license) out.push(`license: ${q(a.license)}`);
  if (a.stars != null) out.push(`stars: ${a.stars}`);
  if (a.added) out.push(`added: ${q(a.added)}`);
  out.push(`lastVerified: ${q(VERIFIED)}`);
  if (a.tags?.length) out.push(`tags: [${a.tags.map(q).join(', ')}]`);
  if (a.links?.length) {
    out.push('links:');
    for (const l of a.links) out.push(`  - label: ${q(l.label)}\n    url: ${q(l.url)}`);
  }
  out.push(`summary: ${q(a.summary)}`);
  if (a.image) out.push(`image: ${q(a.image)}`);
  return out.join('\n');
}

function main() {
  mkdirSync(ADDONS_DIR, { recursive: true });
  const seen = new Set();
  let created = 0, skipped = 0;
  for (const a of DATA) {
    if (seen.has(a.slug)) throw new Error(`duplicate slug: ${a.slug}`);
    seen.add(a.slug);
    const file = join(ADDONS_DIR, `${a.slug}.md`);
    if (existsSync(file)) { skipped++; continue; }
    const body = a.body ? a.body.trimEnd() + '\n' : '';
    writeFileSync(file, `---\n${frontmatter(a)}\n---\n${body}`, 'utf8');
    created++;
  }
  console.log(`✅ seed: ${created} created, ${skipped} skipped (already present). Total in DATA: ${DATA.length}`);
}

main();
