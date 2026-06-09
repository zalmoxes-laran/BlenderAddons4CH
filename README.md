# BlenderAddons4CH

Blender add-ons for Cultural Heritage — a curated catalog of tools useful for documentation, modelling, photogrammetry, point clouds and visualization in CH workflows.

> **Link status:** all links were verified on **2026-06-09**. Entries whose original
> link was dead are marked `dead`/`legacy` and, where possible, point to the current
> home of the tool.
>
> **This README is generated** from `data/addons/*.md` via `npm run gen` — do not edit
> it by hand. Edit the per-tool data files instead. Long-form notes live in each tool's
> Markdown body and surface on the companion site.
>
> 🛠️ To add or edit a tool, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Table of contents

1. [Sites where to find add-ons](#sites_addons)
2. [Texture painting](#texture_painting)
3. [Vertex painting](#vertex_painting)
4. [Sculpting](#sculpting)
5. [Materials](#materials)
6. [PBR materials and the FOSS ecosystem around Blender](#pbr_materials)
7. [Speed up modelling and procedural modelling](#speedup_modelling)
8. [UV mapping tools](#uv_mapping)
9. [Enhance the 3D viewport interface](#interface_3d)
10. [Baking tools](#baking_tools)
11. [Photogrammetry, point clouds and 3D Gaussian Splatting](#photogrammetry)
12. [Compositor](#compositor)
13. [Multi-user work in Blender](#multi_user)
14. [Landscape management](#landscape)
15. [Camera and rendering (static and video)](#camera_rendering)
16. [Animation](#animation)
17. [Connection to external libraries](#external_libraries)
18. [Coding](#coding)
19. [Beautiful themes for Blender](#themes)
20. [Startup file and configuration](#startup_file)
21. [Paid / commercial add-ons](#paid)
22. [Simulation](#simulation)
23. [Exporter / Importer](#exporter_importer)
24. [2D plans and sections: derived-data creation](#derived_data)
25. [BIM / HBIM (Building Information Modelling for Heritage)](#bim_hbim)

## 1. Sites where to find add-ons <a name="sites_addons"></a>

- **Blender Extensions Platform** — `web`
  The official, current source for Blender add-ons (replaces the offline wiki.blender.org/Extensions:2.6). [Website](https://extensions.blender.org/)
- **GitHub search: Blender + Python** — `web`
  Keyword search across 1700+ Blender/Python repositories. [Search](https://github.com/search?l=Python&q=blender&type=Repositories&utf8=%E2%9C%93)
- **Blender Add-on List** — *(legacy)* · `web`
  Collection with animated-GIF descriptions and download links (now largely outdated). [Website](http://blenderaddonlist.blogspot.it/)
- **12 useful Blender add-ons (Blender Guru)** — ⚠️ *(dead)* · `web`
  Old listicle — the original article is offline (June 2026).

## 2. Texture painting <a name="texture_painting"></a>

- **Brush library manager** — *(legacy)*
  Manager script for a brush library. [Download](https://www.dropbox.com/s/2tr64y6w7sgolr7/vtools_libraryManager.py?dl=0)
- **Brushes (xrg81)** — *(legacy)*
  Brushes to append from a blend file. [Download](https://github.com/xrg81/brushes)
- **Texture from Image** — *(legacy)*
  Create a texture from an image.
- **Texture Paint Plus** — *(legacy)*
  Texture-paint helpers by Bart Crouch et al. [Download](https://github.com/artistCDMJ/texture_paint_plus/archive/master.zip)
- **Texture Presets** — *(legacy)*
  Quickly create images at power-of-two sizes (1024/2048/4096).
- **Zero Brush** — *(legacy)*
  Old free version of Zero Brush (now part of the invasive Sensei-free pack).

## 3. Vertex painting <a name="vertex_painting"></a>

- **Oscurart Worn Edges** — *(legacy)*
  Paint per-vertex color at wear areas (exposed edges) — great for wear maps.
- **Slope** — *(legacy)*
  Write face-slope values to a vertex group / color layer (also in BlenderGIS).
- **Transpal** — *(legacy)*
  Vertex painting from visual rules and palettes (incl. from GIMP).

## 4. Sculpting <a name="sculpting"></a>

- **Sculpt Brushes** — *(legacy)*
  Collection of sculpting brushes, enabled with a button.
- **Space View Brush** — *(legacy)*
  Alt+V exposes all sculpting commands at hand.

## 5. Materials <a name="materials"></a>

- **Display Material Relations** — *(legacy)*
  Visualize material relations.
- **Matalogue** — *(legacy)*
  Quickly jump between materials/node trees and scenes. [Website](http://adaptivesamples.com/2015/08/04/introducing-matalogue/)
- **Material Converter** — ⚠️ *(dead)*
  Converted Blender Internal (incl. Photoscan GLSL) materials to Cycles — deprecated.

## 6. PBR materials and the FOSS ecosystem around Blender <a name="pbr_materials"></a>

- **AwesomeBump** — `standalone`
  Open-source generator of metallic/roughness PBR maps. [GitHub](https://github.com/kmkolasinski/AwesomeBump)
- **Luminance HDR** — `standalone`
  Open-source HDR creation from bracketed exposures/panoramas (ex-qtpfsgui).
- **Real-time PBR (Clément Foucault branch)**
  The PBR branch by C. Foucault — long since merged into Blender as EEVEE. [Website](http://www.clement-foucault.com/)
- **Blender Brit (PBR node pack)** — *(legacy)*
  Free PBR node pack (after Cynicat & Blender Guru). [Website](http://www.blenderbrit.co.uk/free-tool-pbr-node-pack/)
- **PBR (Substance-style)** — *(legacy)*
  PBR material inspired by Substance; works with any metallic-roughness pipeline.
- **PBR Node v1.5** — *(legacy)*
  A PBR node group.
- **PBR setup (after Cynicat)** — *(legacy)*
  A PBR setup made following Cynicat's tutorials.
- **PBR workflows in Cycles (Sairiala thesis)** — *(legacy)*
  Bachelor's thesis on PBR workflows in Cycles (Sairiala, 2015).
- **Shader Library** — *(legacy)*
  A shader library.
- **UE4 Shader** — *(legacy)*
  UE4-style shader.
- **xNormal** — *(legacy)* · `standalone`
  High-to-low-poly map baker for many map types (Windows).
- **easyPBR shader** — ⚠️ *(dead)*
  PBR material node — original CG Cookie market link dead (marketplace closed).
- **Mega Shader (Stefano Scarioni)** — ⚠️ *(dead)*
  CC-BY mega shader — original link dead (June 2026).

Standalone tools (marked `standalone`) are open companions to closed-source solutions for improving the PBR pipeline.

## 7. Speed up modelling and procedural modelling <a name="speedup_modelling"></a>

### Modelling

- **Mesh Align Plus**
  Precise alignment by picking geometry features. [Releases](https://github.com/egtwobits/mesh-align-plus/releases)
- **Modular Tree**
  Procedural tree generator (v3). [Releases](https://github.com/MaximeHerpin/modular_tree/releases)
- **Sverchok**
  Powerful node system for procedural/parametric modelling. [GitHub](https://github.com/nortikin/sverchok)
- **Circumferences from three points** — *(legacy)*
  Build a circumference from three points.

  ![Circumferences from three points](<files/3points.png>)
- **Cutaway material** — *(legacy)*
  Cutaway shader for sectioning models. [Blog](https://blendbits.blogspot.it/2017/02/the-cutaway-shader-free-blender-add-on.html)
- **Drop to Ground** — *(legacy)*
  Drops selected objects onto the active object.
- **Floorboard generator** — *(legacy)*
  Generates floorboards.
- **Geodesic distance between points** — *(legacy)*
  Measure distances along geodesic paths on a surface. [Article](http://www.blendernation.com/2016/03/03/calculating-distances-two-points-using-geodesic-paths/)
- **Intersection** — *(legacy)*
  Add the intersection with another mesh to the active object.
- **Laser Slicer 0.7** — *(legacy)*
  Make cross-sections and export an SVG for laser cutting.
- **np_station** — *(legacy)*
  Precision drawing and placement workflow tools. [Forum](https://blenderartists.org/t/addon-np-station/686462)
- **Object Cross Section** — *(legacy)*
  Create cross-sections using the active object as cut plane.
- **Planarizer** — *(legacy)*
  Coplanarizes selected faces (median normal); fixes non-planar quads.
- **Rotation Constrained** — *(legacy)*
  Constrained-rotation helper.

  ![Rotation Constrained](<files/tip rotation constrained.png>)
- **Selective Unhide** — *(legacy)*
  Selectively unhide hidden objects. [GitHub](https://github.com/RayMairlot/Selective-Unhide)
- **Snap Advanced** — *(legacy)*
  Advanced snapping helpers.

### Retopology / hard-surface modelling

- **Blender Carver** — *(legacy)*
  Carving / boolean modelling tools.
- **Blender Rebool** — *(legacy)*
  Repeated-boolean helper.
- **Bool Tool** — *(legacy)*
  Direct booleans as well as via modifier. [Code](https://github.com/vitorbalbio/code)
- **Booltron** — *(legacy)*
  Boolean add-on (union/difference/intersect on groups).
- **Box Cutter** — *(legacy)*
  Fast cutting/boolean hard-surface workflow. [Notes](https://masterxeon1001.com/2016/05/28/box-cutter-4-update-notes/)

## 8. UV mapping tools <a name="uv_mapping"></a>

- **Magic UV**
  UV editing helpers; includes a bounding box in UV space. [GitHub](https://github.com/nutti/Magic-UV)
- **Move UV** — *(legacy)*
  Move UVs from the 3D view.
- **Multi-Object UV Editing** — *(legacy)*
  Edit UVs across multiple objects. [GitHub](https://github.com/ndee85/Multi-Object-UV-Editing)
- **Sure UV** — *(legacy)*
  Quick box/cube UV mapping for architecture. [Dev file](https://developer.blender.org/F18724) · [Forum](http://blenderartists.org/forum/showthread.php?236631-Addon-Simple-Box-UVW-Map-Modifier)
- **TexTools for Blender** — *(legacy)*
  UV/texture toolset (baking, layout, checker maps). [Bitbucket](https://bitbucket.org/renderhjs/textools-blender/)
- **UV Squares** — *(legacy)*
  Reshape UV faces into grids/squares. [GitHub](https://github.com/Radivarig/UvSquares/) · [Video](https://www.youtube.com/watch?v=oklmDQx17HI&feature=youtu.be)

## 9. Enhance the 3D viewport interface <a name="interface_3d"></a>

- **Amaranth Toolset**
  Production quality-of-life tools (the old pablovazquez.org page is dead). [Blender Extensions](https://extensions.blender.org/add-ons/amaranth/)
- **MeasureIt**
  On-screen dimensions/measurements — now bundled in Blender. [Blender Extensions](https://extensions.blender.org/add-ons/measureit/) · [Author repo](https://github.com/Antonioya/blender)
- **Miscellaneous tools (lapineige)**
  A miscellany of small useful add-ons. [GitHub](https://github.com/lapineige/Blender_add-ons.git)
- **Add Dimension** — *(legacy)*
  Set an edge length arbitrarily.
- **Apply Shape Keys** — *(legacy)*
  Helper to apply shape keys.
- **Enhanced 3D Cursor** — *(legacy)*
  Extended 3D-cursor controls.
- **Is Key Free** — *(legacy)*
  Find an unused key for a shortcut.
- **Mesh Snap Utilities Line** — *(legacy)*
  Draw lines with snapping (now partly built into Blender).
- **Modifier Manager** — *(legacy)*
  Manage modifiers across objects.
- **Rename** — *(legacy)*
  Batch-rename helper.
- **Screencast Keys** — *(legacy)*
  Show pressed keys on screen.
- **Shading menu in header** — *(legacy)*
  Header shortcut for shading modes.
- **Vertex Index Viewer** — ⚠️ *(dead)*
  Show vertex indices — now built in (enable Developer Extras + index overlays).

## 10. Baking tools <a name="baking_tools"></a>

- **Meltdown** — *(legacy)*
  Improved baking UI.
- **Multibake** — *(legacy)*
  Bake selected objects into individual maps.
- **Texture Atlas** — *(legacy)*
  Pack/bake multiple objects into a texture atlas (Campbell Barton et al.).

## 11. Photogrammetry, point clouds and 3D Gaussian Splatting <a name="photogrammetry"></a>

> This is the core section for Cultural Heritage 3D workflows. The three areas —
> **photogrammetric import**, **point-cloud import** and **3D Gaussian Splatting** —
> were all re-verified on 2026-06-09.

### Photogrammetry import

- **Photogrammetry Importer** — ✅ **recommended** · Blender 5.0.2+ · MIT · `EM pipeline`
  The reference tool for importing photogrammetric reconstructions (cameras + point clouds) from every major SfM/MVS package. [GitHub](https://github.com/SBCV/Blender-Addon-Photogrammetry-Importer)
- **3D Survey Collection (3DSC)** — `EM pipeline`
  Survey/georeferencing toolset for Blender, interoperable with EMTools (shift, EPSG).
- **QuipCAM** — *(status unverified)*
  Blender OSL shader to model 360° panoramas inside the 3D space.
- **Import Bundler (.out)** — *(legacy)*
  Imports the bundle.out file produced by Bundler.
- **Panorama Tracker** — *(legacy)*
  Tool to stabilize 360° videos. [GitHub](https://github.com/dfelinto/Panorama-Tracker)

### Point-cloud import

- **Point Cloud I/O** — ✅ **recommended** · `EM pipeline`
  Imports/exports E57, PLY, LAS/LAZ, PCD, XYZ and PTS into Blender's native PointCloud object. [Blender Extensions](https://extensions.blender.org/add-ons/point-cloud-io/)
- **Blender Import Point Cloud Addon** — `EM pipeline`
  Imports PLY files as point clouds into Blender. [GitHub](https://github.com/SBCV/Blender-Import-Point-Cloud-Addon)
- **io_mesh_xyz** — ⚠️ *(dead)*
  Legacy XYZ importer/exporter — link dead, superseded by Point Cloud I/O.

### 3D Gaussian Splatting (3DGS)

- **3DGS Render by KIRI Engine** — ✅ **recommended** · Blender 5.1+ · GPL-3.0 · `EM pipeline`
  Free, full Gaussian-Splat editing and rendering suite with EEVEE integration. [GitHub](https://github.com/Kiri-Innovation/3dgs-render-blender-addon)
- **Gauss Cannon** — Blender 4.2+ · GPL-3.0
  Automates the capture side of 3DGS: camera paths and ray-traced point clouds for reconstruction. [GitHub](https://github.com/keshmirian/gauss-cannon)
- **Gaussian Splatting Blender Addon (ReshotAI)**
  Imports a 3DGS dataset and creates visualizations; handy for cleaning floaters. [GitHub](https://github.com/ReshotAI/gaussian-splatting-blender-addon)

## 12. Compositor <a name="compositor"></a>

- **Blender Quick Compositor** — *(legacy)*
  Rapid compositing presets. [Website](http://www.blenderbrit.co.uk/quickcompositor/)
- **Color Ramp Dropper** — *(legacy)*
  Sample a set of color-ramp values from an image. [Forum](https://blenderartists.org/forum/showthread.php?401806-Addon-v1-2-ColorRamp-Dropper-easily-select-color-values-for-ColorRamp-nodes&p=3071567#post3071567) · [GitHub](https://github.com/qwenger/BAddons/tree/master/Node_ColorRampDropper)
- **EasyFX** — *(legacy)*
  Post-process renders quickly via compositor nodes. [Download](http://www.rymdnisse.net/download/blender-addons/easyfx/)
- **Photo Editing Tool** — *(legacy)*
  Edit images with compositor nodes (extra panel).

## 13. Multi-user work in Blender <a name="multi_user"></a>

- **Verse 2** — *(legacy)*
  Server + client for collaborative modelling in one 3D space. [GitHub](https://github.com/verse/verse-blender)

## 14. Landscape management <a name="landscape"></a>

- **BlenderGIS** — `EM pipeline`
  Import DEM/shapefiles/basemaps and georeference scenes — relevant to CH georeferencing. [GitHub](https://github.com/domlysz/BlenderGIS.git)
- **Sun Position**
  Sun/sky positioning by date/time/location — bundled in Blender.
- **LOD generation for terrains** — *(legacy)*
  Generate levels of detail for terrains. [Website](http://hugobarreira.weebly.com)
- **OSG Export** — *(legacy)*
  Export to OpenSceneGraph. [GitHub](https://github.com/cedricpinson/osgexport)
- **Vegetation (grass)** — *(legacy)*
  Grass/vegetation setup (companion Google Doc no longer available). [Website](http://www.3d-wolf.com/grass.html)

## 15. Camera and rendering (static and video) <a name="camera_rendering"></a>

- **Real Camera**
  Physically-based camera settings for realistic rendering. [Website](https://3d-wolf.com/products/camera.html)
- **CameraImagePlane** — *(legacy)*
  Create a projection plane in the camera.
- **Orbit camera** — *(legacy)*
  Create a camera that orbits an object. [GitHub](https://github.com/Antonioya/blender)
- **Advanced Boomsmash** — ⚠️ *(dead)*
  OpenGL-viewport video capture — original link dead (June 2026).

## 16. Animation <a name="animation"></a>

- **Blender Power Sequencer**
  Efficiency tools for the Video Sequence Editor. [GitHub](https://github.com/GDquest/Blender-power-sequencer.git)
- **Animation Nodes** — *(legacy)*
  Node-based procedural animation system. [GitHub](https://github.com/JacquesLucke/animation_nodes)
- **Flip Animation** — *(legacy)*
  Mirror / flip an animation.
- **Keyframes Quick Tools** — *(legacy)*
  Quick keyframe operations.
- **VSE logging system** — *(legacy)*
  Logging system for the VSE.
- **Particle morphing tools** — ⚠️ *(dead)*
  Particle morphing (deprecated in recent versions).

## 17. Connection to external libraries <a name="external_libraries"></a>

- **Blender Cloud textures** — *(legacy)*
  Use Blender Cloud textures out of the box (needs Blender ID + subscription).
- **Blend Library** — ⚠️ *(dead)*
  Linked-asset library — wiki link dead; use the built-in Asset Browser.

## 18. Coding <a name="coding"></a>

- **Code Autocomplete** — *(legacy)*
  Autocomplete for add-on development in Blender's text editor. [Release](https://github.com/JacquesLucke/code_autocomplete/releases/tag/code_autocomplete_v2a)
- **XML Importer** — *(legacy)*
  Import XML data.

## 19. Beautiful themes for Blender <a name="themes"></a>

*(empty — contributions welcome)*

## 20. Startup file and configuration <a name="startup_file"></a>

To be copied into `C:\Users\[USER]\AppData\Roaming\Blender Foundation\Blender\[VERSION]\config`.

## 21. Paid / commercial add-ons <a name="paid"></a>

- **BPainter** — commercial
  Advanced texture-painting suite for Blender.
- **Gaffer** — commercial
  Light management and tuning.
- **RetopoFlow** — commercial
  In-Blender retopology toolkit (with tutorials).
- **Asset Sketcher** — *(legacy)* · commercial
  Paint assets (e.g. trees) onto other geometry.
- **Baketools** — *(legacy)* · commercial
  Advanced, fast and precise baking tools.
- **Capsule** — *(legacy)* · commercial
  Rule-based FBX export of object groups.
- **Color Master** — *(legacy)* · commercial
  Color correction with a rich thumbnail preview section.
- **Eibriel Linker** — *(legacy)* · commercial
  Manage linked assets (needs its own particular setup).
- **Lodscape** — *(legacy)* · commercial
  Automatic landscape LODs (needs clean topology, e.g. from DEM/Instant Meshes).
- **ProLightSkies** — *(legacy)* · commercial
  Photorealistic outdoor sky/lighting.

## 22. Simulation <a name="simulation"></a>

- **Projectors**
  Simulate projector light onto surfaces in 3D space. [GitHub](https://github.com/Ocupe/Projectors)
- **Modeling-Cloth** — *(legacy)*
  Model and simulate cloth interactively. [GitHub](https://github.com/the3dadvantage/Modeling-Cloth)

## 23. Exporter / Importer <a name="exporter_importer"></a>

- **glTF Blender Exporter**
  glTF import/export — now built into Blender. [GitHub](https://github.com/KhronosGroup/glTF-Blender-Exporter)
- **FBX Bundle** — ⚠️ *(dead)*
  Batch FBX export — original link offline; moved to Superhive / Blender Market.

## 24. 2D plans and sections: derived-data creation <a name="derived_data"></a>

- **MeasureIt_ARCH** — `EM pipeline`
  Design documentation & technical drawings; export to images, vector graphics or DXF. [GitHub](https://github.com/kevancress/MeasureIt_ARCH?tab=readme-ov-file)

## 25. BIM / HBIM (Building Information Modelling for Heritage) <a name="bim_hbim"></a>

- **Bonsai (formerly BlenderBIM)** — ✅ **recommended** · GPL-3.0 · `EM pipeline`
  Reference FOSS OpenBIM / native-IFC authoring platform — the key tool for HBIM. [Site](https://bonsaibim.org/) · [Blender Extensions](https://extensions.blender.org/add-ons/bonsai/) · [Source](https://github.com/IfcOpenShell/IfcOpenShell) · [Docs](https://docs.ifcopenshell.org/bonsai.html)

> A typical HBIM pipeline pairs Bonsai with the photogrammetry / point-cloud tools in
> [section 11](#photogrammetry): reconstruct or scan the asset, import the mesh / point
> cloud, then model and enrich it as native IFC in Bonsai.

---

*Generated from 125 catalog entries. Last link verification: 2026-06-09.*
