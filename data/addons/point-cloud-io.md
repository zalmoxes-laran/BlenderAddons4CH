---
name: "Point Cloud I/O"
slug: "point-cloud-io"
category: "point-cloud"
platform: "blender"
status: "maintained"
recommended: true
emPipeline: true
lastVerified: "2026-06-09"
tags: ["e57", "ply", "las", "laz", "pcd", "xyz", "pts", "lidar", "geometry-nodes"]
links:
  - label: "Blender Extensions"
    url: "https://extensions.blender.org/add-ons/point-cloud-io/"
summary: "Imports/exports E57, PLY, LAS/LAZ, PCD, XYZ and PTS into Blender's native PointCloud object."
---
The recommended modern point-cloud importer. Reads/writes E57, PLY, LAS/LAZ, PCD,
XYZ and PTS into Blender's **native** PointCloud object (not a mesh fallback).
Colors, normals, intensity, classification and per-point custom fields become
point attributes usable in Geometry Nodes and shaders. Handles million-point
datasets smoothly — well suited to LiDAR / heritage-scan data.

Replaces the legacy `io_mesh_xyz` add-on.
