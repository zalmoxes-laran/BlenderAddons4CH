# Contributing to BlenderAddons4CH

This repo is a **curated catalog** of Blender add-ons (and a few standalone
companions) useful in Cultural Heritage 3D work. It is **data-driven**: the
catalog lives as one Markdown file per tool, and *both* the `README.md` in this
repo *and* the catalog page on the Extended Matrix website
(`/blender-addons`) are generated from that data.

## ⚠️ The golden rule

**Never edit `README.md` by hand — it is generated and will be overwritten.**
Edit the per-tool data files and regenerate.

## Repo layout

| Path | What it is |
|---|---|
| `data/addons/<slug>.md` | **one file per tool — the source of truth** |
| `data/SCHEMA.md` | human-readable field reference |
| `data/schema.ts` | the Zod schema (also imported by the website) |
| `data/sections.mjs` | section order, titles, anchors, intro prose |
| `scripts/generate-readme.mjs` | regenerates `README.md` from the data |

## Add or edit a tool

1. **Create or edit** `data/addons/<slug>.md`. The **filename is the slug**
   (kebab-case, e.g. `point-cloud-io.md`). All frontmatter fields are documented
   in [`data/SCHEMA.md`](data/SCHEMA.md). Minimum required: `name`, `category`,
   `platform`, `status`, `lastVerified`, `summary`.

   ```md
   ---
   name: "Point Cloud I/O"
   category: "point-cloud"
   platform: "blender"
   status: "maintained"
   recommended: true
   emPipeline: true
   lastVerified: "2026-06-09"
   links:
     - label: "Blender Extensions"
       url: "https://extensions.blender.org/add-ons/point-cloud-io/"
   summary: "Imports/exports E57, PLY, LAS/LAZ, PCD, XYZ and PTS into Blender's native PointCloud object."
   ---
   Long-form notes go in the body. They appear on the website (and a future
   per-tool page), NOT in the README.
   ```

2. **Regenerate** the README:

   ```sh
   npm install   # first time only — installs gray-matter
   npm run gen
   ```

3. **Commit** the data file(s) *and* the regenerated `README.md` together.

## Conventions

- **`status`** — `maintained` (verified current) · `legacy` (exists but old /
  unverified on current Blender) · `dead` (gone) · `unknown`.
- **`recommended: true`** — the best-in-class choice for its category.
- **`emPipeline: true`** — part of the EM survey → model → IFC spine
  (surfaced by the "EM pipeline" filter on the site).
- **`lastVerified`** — set it to the date you actually checked the links.
- **Verify links before adding them**, e.g. `curl -sIL <url>` should resolve.
  If a tool has no current home, leave `links` out and set `status` accordingly
  rather than linking somewhere dead.

## How it reaches the website

The Extended Matrix site (`ExtendedMatrix-site`) includes this repo as a **git
submodule** (`vendor/blenderaddons4ch`) and renders the catalog at
`/blender-addons`. After you push changes here, **bump the pointer** there to
publish them live:

```sh
# in the ExtendedMatrix-site repo
git submodule update --remote vendor/blenderaddons4ch
git commit -am "chore: bump Blender add-on catalog" && git push
```

Locally the site reads your sibling checkout of this repo directly, so your
edits show up in `npm run dev` immediately — the submodule bump is only needed
to publish to production.
