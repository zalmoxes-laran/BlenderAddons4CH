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
> Removed/defunct tools are preserved in [ARCHIVE.md](ARCHIVE.md) for the record.

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

## 2. Texture painting <a name="texture_painting"></a>

- **Brush library manager** — *(legacy)*
  Manager script for a brush library. [Download](https://www.dropbox.com/s/2tr64y6w7sgolr7/vtools_libraryManager.py?dl=0)
- **Brushes (xrg81)** — *(legacy)*
  Brushes to append from a blend file. [Download](https://github.com/xrg81/brushes)
- **Texture Paint Plus** — *(legacy)*
  Texture-paint helpers by Bart Crouch et al. [Download](https://github.com/artistCDMJ/texture_paint_plus/archive/master.zip)
- **Zero Brush** — *(legacy)*
  Old free version of Zero Brush (now part of the invasive Sensei-free pack). [Website](https://blendersensei.com/zero-brush/)

## 3. Vertex painting <a name="vertex_painting"></a>

- **Slope** — *(legacy)*
  Write face-slope values to a vertex group / color layer (also in BlenderGIS). [GitHub](https://github.com/varkenvarken/blenderaddons)

## 4. Sculpting <a name="sculpting"></a>

- **Space View Brush** — *(legacy)*
  Alt+V exposes all sculpting commands at hand. [Blender Extensions](https://extensions.blender.org/add-ons/dynamic-brush-menus/)

## 5. Materials <a name="materials"></a>

- **Matalogue** — *(legacy)*
  Quickly jump between materials/node trees and scenes. [Website](http://adaptivesamples.com/2015/08/04/introducing-matalogue/)

## 6. PBR materials and the FOSS ecosystem around Blender <a name="pbr_materials"></a>

- **AwesomeBump** — `standalone`
  Open-source generator of metallic/roughness PBR maps. [GitHub](https://github.com/kmkolasinski/AwesomeBump)
- **Luminance HDR** — `standalone`
  Open-source HDR creation from bracketed exposures/panoramas (ex-qtpfsgui). [GitHub](https://github.com/LuminanceHDR/LuminanceHDR)
- **Real-time PBR (Clément Foucault branch)**
  The PBR branch by C. Foucault — long since merged into Blender as EEVEE. [Website](http://www.clement-foucault.com/)
- **Blender Brit (PBR node pack)** — *(legacy)*
  Free PBR node pack (after Cynicat & Blender Guru). [Website](http://www.blenderbrit.co.uk/free-tool-pbr-node-pack/)
- **PBR workflows in Cycles (Sairiala thesis)** — *(legacy)*
  Bachelor's thesis on PBR workflows in Cycles (Sairiala, 2015). [Thesis](https://www.theseus.fi/handle/10024/102448)
- **xNormal** — *(legacy)* · `standalone`
  High-to-low-poly map baker for many map types (Windows). [Website](https://xnormal.net/)

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
  Build a circumference from three points. [Blender Extensions](https://extensions.blender.org/add-ons/tinycad-mesh-tools/)

  ![Circumferences from three points](<files/3points.png>)
- **Cutaway material** — *(legacy)*
  Cutaway shader for sectioning models. [Blog](https://blendbits.blogspot.it/2017/02/the-cutaway-shader-free-blender-add-on.html)
- **Drop to Ground** — *(legacy)*
  Drops selected objects onto the active object. [GitHub](https://github.com/hannesdelbeke/drop-it-blender-addon)
- **Floorboard generator** — *(legacy)*
  Generates floorboards. [GitHub](https://github.com/importbpy/Floorboard-Generator)
- **Geodesic distance between points** — *(legacy)*
  Measure distances along geodesic paths on a surface. [Article](http://www.blendernation.com/2016/03/03/calculating-distances-two-points-using-geodesic-paths/)
- **Intersection** — *(legacy)*
  Add the intersection with another mesh to the active object. [Website](http://airplanes3d.net/scripts-253_e.xml)
- **Laser Slicer 0.7** — *(legacy)*
  Make cross-sections and export an SVG for laser cutting. [GitHub](https://github.com/rgsouthall/laser_slicer)
- **np_station** — *(legacy)*
  Precision drawing and placement workflow tools. [Forum](https://blenderartists.org/t/addon-np-station/686462)
- **Object Cross Section** — *(legacy)*
  Create cross-sections using the active object as cut plane. [Website](https://dsculptor.gumroad.com/l/cross_section)
- **Planarizer** — *(legacy)*
  Coplanarizes selected faces (median normal); fixes non-planar quads. [GitHub](https://github.com/Klowner/blender-planarizer)
- **Selective Unhide** — *(legacy)*
  Selectively unhide hidden objects. [GitHub](https://github.com/RayMairlot/Selective-Unhide)

### Retopology / hard-surface modelling

- **Blender Carver**
  Carving / boolean modelling tools. [Blender manual (bundled)](https://docs.blender.org/manual/en/4.1/addons/object/carver.html)
- **Bool Tool** — *(legacy)*
  Direct booleans as well as via modifier. [Code](https://github.com/vitorbalbio/code)
- **Booltron** — *(legacy)*
  Boolean add-on (union/difference/intersect on groups). [Blender Extensions](https://extensions.blender.org/add-ons/booltron/)
- **Box Cutter** — *(legacy)*
  Fast cutting/boolean hard-surface workflow. [Notes](https://masterxeon1001.com/2016/05/28/box-cutter-4-update-notes/)

## 8. UV mapping tools <a name="uv_mapping"></a>

- **Magic UV**
  UV editing helpers; includes a bounding box in UV space. [GitHub](https://github.com/nutti/Magic-UV)
- **Multi-Object UV Editing** — *(legacy)*
  Edit UVs across multiple objects. [GitHub](https://github.com/ndee85/Multi-Object-UV-Editing)
- **Sure UV** — *(legacy)*
  Quick box/cube UV mapping for architecture. [Dev file](https://developer.blender.org/F18724) · [Forum](http://blenderartists.org/forum/showthread.php?236631-Addon-Simple-Box-UVW-Map-Modifier)
- **TexTools for Blender** — *(legacy)*
  UV/texture toolset (baking, layout, checker maps). [Bitbucket](https://bitbucket.org/renderhjs/textools-blender/)
- **UV Squares** — *(legacy)*
  Reshape UV faces into grids/squares. [GitHub](https://github.com/Radivarig/UvSquares/) · [Video](https://www.youtube.com/watch?v=oklmDQx17HI&feature=youtu.be)

## 9. Enhance the 3D viewport interface <a name="interface_3d"></a>

- **Add Dimension**
  Set an edge length arbitrarily. [Blender manual (bundled)](https://docs.blender.org/manual/en/4.1/addons/mesh/edit_mesh_tools.html)
- **Amaranth Toolset**
  Production quality-of-life tools (the old pablovazquez.org page is dead). [Blender Extensions](https://extensions.blender.org/add-ons/amaranth/)
- **Apply Shape Keys**
  Helper to apply shape keys. [Blender manual (bundled)](https://docs.blender.org/manual/en/latest/animation/shape_keys/shape_keys_panel.html)
- **MeasureIt**
  On-screen dimensions/measurements — now bundled in Blender. [Blender Extensions](https://extensions.blender.org/add-ons/measureit/) · [Author repo](https://github.com/Antonioya/blender)
- **Miscellaneous tools (lapineige)**
  A miscellany of small useful add-ons. [GitHub](https://github.com/lapineige/Blender_add-ons.git)
- **Rename**
  Batch-rename helper. [Blender manual (bundled)](https://docs.blender.org/manual/en/latest/files/blend/rename.html)
- **Vertex Index Viewer**
  Show vertex indices — now built in (enable Developer Extras + index overlays). [Blender manual (bundled)](https://docs.blender.org/manual/en/latest/editors/3dview/display/overlays.html)
- **Enhanced 3D Cursor** — *(legacy)*
  Extended 3D-cursor controls. [GitHub](https://github.com/dairin0d/enhanced-3d-cursor)
- **Is Key Free** — *(legacy)*
  Find an unused key for a shortcut. [Blender Extensions](https://extensions.blender.org/add-ons/is-key-free/)
- **Mesh Snap Utilities Line** — *(legacy)*
  Draw lines with snapping (now partly built into Blender). [Blender Extensions](https://extensions.blender.org/add-ons/snap-utilities-line/)
- **Modifier Manager** — *(legacy)*
  Manage modifiers across objects. [Blender Extensions](https://extensions.blender.org/add-ons/modifier-tools/)
- **Screencast Keys** — *(legacy)*
  Show pressed keys on screen. [Blender Extensions](https://extensions.blender.org/add-ons/screencast-keys/)

## 10. Baking tools <a name="baking_tools"></a>

- **Meltdown** — *(legacy)*
  Improved baking UI. [GitHub](https://github.com/MadMinstrel/meltdown)

## 11. Photogrammetry, point clouds and 3D Gaussian Splatting <a name="photogrammetry"></a>

> This is the core section for Cultural Heritage 3D workflows. The three areas —
> **photogrammetric import**, **point-cloud import** and **3D Gaussian Splatting** —
> were all re-verified on 2026-06-09.

### Photogrammetry import

- **Photogrammetry Importer** — ✅ **recommended** · Blender 5.0.2+ · MIT · `EM pipeline`
  The reference tool for importing photogrammetric reconstructions (cameras + point clouds) from every major SfM/MVS package. [GitHub](https://github.com/SBCV/Blender-Addon-Photogrammetry-Importer)
- **3D Survey Collection (3DSC)** — `EM pipeline`
  Survey/georeferencing toolset for Blender, interoperable with EMTools (shift, EPSG). [GitHub](https://github.com/zalmoxes-laran/3D-survey-collection)
- **Panorama Tracker** — *(legacy)*
  Tool to stabilize 360° videos. [GitHub](https://github.com/dfelinto/Panorama-Tracker)

### Point-cloud import

- **Point Cloud I/O** — ✅ **recommended** · `EM pipeline`
  Imports/exports E57, PLY, LAS/LAZ, PCD, XYZ and PTS into Blender's native PointCloud object. [Blender Extensions](https://extensions.blender.org/add-ons/point-cloud-io/)
- **Blender Import Point Cloud Addon** — `EM pipeline`
  Imports PLY files as point clouds into Blender. [GitHub](https://github.com/SBCV/Blender-Import-Point-Cloud-Addon)

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

## 13. Multi-user work in Blender <a name="multi_user"></a>

- **Verse 2** — *(legacy)*
  Server + client for collaborative modelling in one 3D space. [GitHub](https://github.com/verse/verse-blender)

## 14. Landscape management <a name="landscape"></a>

- **BlenderGIS** — `EM pipeline`
  Import DEM/shapefiles/basemaps and georeference scenes — relevant to CH georeferencing. [GitHub](https://github.com/domlysz/BlenderGIS.git)
- **Sun Position**
  Sun/sky positioning by date/time/location — bundled in Blender. [Blender manual (bundled)](https://docs.blender.org/manual/en/4.1/addons/lighting/sun_position.html)
- **LOD generation for terrains** — *(legacy)*
  Generate levels of detail for terrains. [Website](http://hugobarreira.weebly.com)
- **OSG Export** — *(legacy)*
  Export to OpenSceneGraph. [GitHub](https://github.com/cedricpinson/osgexport)
- **Vegetation (grass)** — *(legacy)*
  Grass/vegetation setup (companion Google Doc no longer available). [Website](http://www.3d-wolf.com/grass.html)

## 15. Camera and rendering (static and video) <a name="camera_rendering"></a>

- **Real Camera**
  Physically-based camera settings for realistic rendering. [Website](https://3d-wolf.com/products/camera.html)
- **Advanced Boomsmash** — *(legacy)*
  OpenGL-viewport video capture — original link dead (June 2026). [GitHub](https://github.com/lucianomunoz/AdvancedBoomsmash)
- **CameraImagePlane** — *(legacy)*
  Create a projection plane in the camera. [Website](https://cwolf3d.gumroad.com/l/scripts-create-camera-image-plane)
- **Orbit camera** — *(legacy)*
  Create a camera that orbits an object. [GitHub](https://github.com/Antonioya/blender)

## 16. Animation <a name="animation"></a>

- **Blender Power Sequencer**
  Efficiency tools for the Video Sequence Editor. [GitHub](https://github.com/GDquest/Blender-power-sequencer.git)
- **Animation Nodes** — *(legacy)*
  Node-based procedural animation system. [GitHub](https://github.com/JacquesLucke/animation_nodes)
- **Flip Animation** — *(legacy)*
  Mirror / flip an animation. [GitHub](https://github.com/kayy/FlipAnimation)
- **Keyframes Quick Tools** — *(legacy)*
  Quick keyframe operations. [GitHub](https://github.com/quollism/blender-keyframetools)

## 17. Connection to external libraries <a name="external_libraries"></a>

## 18. Coding <a name="coding"></a>

- **Code Autocomplete** — *(legacy)*
  Autocomplete for add-on development in Blender's text editor. [Release](https://github.com/JacquesLucke/code_autocomplete/releases/tag/code_autocomplete_v2a)

## 19. Beautiful themes for Blender <a name="themes"></a>

*(empty — contributions welcome)*

## 20. Startup file and configuration <a name="startup_file"></a>

To be copied into `C:\Users\[USER]\AppData\Roaming\Blender Foundation\Blender\[VERSION]\config`.

## 21. Paid / commercial add-ons <a name="paid"></a>

- **Gaffer** — commercial
  Light management and tuning. [GitHub](https://github.com/gregzaal/Gaffer)
- **RetopoFlow** — commercial
  In-Blender retopology toolkit (with tutorials). [GitHub](https://github.com/CGCookie/retopoflow)
- **Asset Sketcher** — *(legacy)* · commercial
  Paint assets (e.g. trees) onto other geometry. [Superhive](https://superhivemarket.com/products/asset-brush)
- **Baketools** — *(legacy)* · commercial
  Advanced, fast and precise baking tools. [Superhive](https://superhivemarket.com/products/baketool)
- **Capsule** — *(legacy)* · commercial
  Rule-based FBX export of object groups. [GitHub](https://github.com/Takanu/Capsule)
- **Color Master** — *(legacy)* · commercial
  Color correction with a rich thumbnail preview section. [Superhive](https://superhivemarket.com/products/colormaster)
- **Lodscape** — *(legacy)* · commercial
  Automatic landscape LODs (needs clean topology, e.g. from DEM/Instant Meshes). [Superhive](https://superhivemarket.com/products/lodscape-lod-tools)
- **ProLightSkies** — *(legacy)* · commercial
  Photorealistic outdoor sky/lighting. [Website](https://www.blenderguru.com/install-pro-lighting-skies)

## 22. Simulation <a name="simulation"></a>

- **Projectors**
  Simulate projector light onto surfaces in 3D space. [GitHub](https://github.com/Ocupe/Projectors)
- **Modeling-Cloth** — *(legacy)*
  Model and simulate cloth interactively. [GitHub](https://github.com/the3dadvantage/Modeling-Cloth)

## 23. Exporter / Importer <a name="exporter_importer"></a>

- **glTF Blender Exporter**
  glTF import/export — now built into Blender. [GitHub](https://github.com/KhronosGroup/glTF-Blender-Exporter)
- **FBX Bundle** — *(legacy)*
  Batch FBX export — original link offline; moved to Superhive / Blender Market. [GitHub](https://github.com/V-Sekai/V-Sekai.blender-addon-fbx-bundle)

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

*Generated from 92 catalog entries. Last link verification: 2026-06-09.*
