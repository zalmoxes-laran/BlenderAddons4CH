---
name: "Photogrammetry Importer"
slug: "photogrammetry-importer"
category: "photogrammetry"
platform: "blender"
status: "maintained"
recommended: true
emPipeline: true
blenderVersion: "5.0.2+"
license: "MIT"
stars: 1300
added: "2024-03-24"
lastVerified: "2026-06-09"
tags: ["colmap", "glomap", "metashape", "meshroom", "mve", "open3d", "opensfm", "openmvg", "regard3d", "visualsfm", "cameras", "point-cloud"]
links:
  - label: "GitHub"
    url: "https://github.com/SBCV/Blender-Addon-Photogrammetry-Importer"
summary: "The reference tool for importing photogrammetric reconstructions (cameras + point clouds) from every major SfM/MVS package."
---
Imports cameras and point clouds from Agisoft Metashape, COLMAP/GLOMAP, Meshroom,
MVE, Open3D, OpenSfM, OpenMVG, Regard3D and VisualSFM. Point clouds can be read
from PLY/PCD/LAS/LAZ/ASCII and represented either via OpenGL or Geometry Nodes.

Actively maintained by Sebastian Bullinger (SBCV): latest release Feb 2026,
written almost entirely in Python, ~1.3k★. This is the backbone of any
Blender-based photogrammetry-to-EM workflow.
