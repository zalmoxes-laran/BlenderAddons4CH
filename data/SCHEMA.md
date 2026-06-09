# Addon data schema

Each tool in the catalog is **one Markdown file** under `data/addons/<slug>.md`.
The YAML frontmatter holds the structured fields; the Markdown body is the
long-form description (the "manual" notes). The repo `README.md` is **generated**
from these files — edit the data files, not the README.

Run `npm run gen` to regenerate.

## Frontmatter fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `name` | string | ✅ | Display name of the tool |
| `slug` | string | ✅ | Stable id, kebab-case; must match the file name |
| `category` | enum | ✅ | One of the categories below |
| `platform` | enum | ✅ | `blender` \| `standalone` \| `web` — future-proofs non-Blender tools |
| `status` | enum | ✅ | `maintained` \| `legacy` \| `dead` \| `unknown` |
| `recommended` | boolean | – | `true` marks the current best-in-class choice (default `false`) |
| `emPipeline` | boolean | – | `true` if part of the EM rilievo→modello→IFC spine (default `false`) |
| `blenderVersion` | string | – | e.g. `"5.0.2+"`, `"4.2+"` |
| `license` | string | – | e.g. `"GPL-3.0"` |
| `stars` | number | – | GitHub stars *as of `lastVerified`* (informational) |
| `added` | string (date) | – | When the tool was first added to the list |
| `lastVerified` | string (date) | ✅ | Last time the links/status were checked |
| `tags` | string[] | – | CH use-cases / keywords (colmap, metashape, lidar, …) |
| `links` | {label,url}[] | – | External links; `url` must be a valid URL |
| `summary` | string | ✅ | One-line description shown on cards |

## `category` enum

`photogrammetry`, `point-cloud`, `gaussian-splatting`, `bim-hbim`, `modelling`,
`retopology`, `uv`, `texturing`, `materials`, `sculpting`, `vertex-paint`,
`baking`, `rendering`, `camera`, `animation`, `compositor`, `gis-landscape`,
`simulation`, `exchange`, `documentation`, `interface`, `coding`, `libraries`,
`themes`, `misc`.

The machine-readable Zod version lives in `data/schema.ts` (ready to drop into
the Astro site's content config).
