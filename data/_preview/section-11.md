## 11. Photogrammetry, point clouds and 3D Gaussian Splatting

> Generated from `data/addons/*.md` — do not edit by hand. Run `npm run gen`.

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
