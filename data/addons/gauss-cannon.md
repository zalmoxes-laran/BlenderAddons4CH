---
name: "Gauss Cannon"
slug: "gauss-cannon"
category: "gaussian-splatting"
platform: "blender"
status: "maintained"
blenderVersion: "4.2+"
license: "GPL-3.0"
lastVerified: "2026-06-09"
tags: ["3dgs", "capture", "camera-paths", "point-cloud", "postshot"]
links:
  - label: "GitHub"
    url: "https://github.com/keshmirian/gauss-cannon"
summary: "Automates the capture side of 3DGS: camera paths and ray-traced point clouds for reconstruction."
---
By Arash Keshmirian. Places cameras at mesh face centers (with geometry
detection to avoid cameras inside objects), ray-traces a point cloud at
configurable resolution, and exports camera paths / point clouds to
reconstruction tools (Postshot, Lichtfeld Studio). Useful to generate synthetic
training data from a Blender scene. GPL-3.0, Blender 4.2+.
