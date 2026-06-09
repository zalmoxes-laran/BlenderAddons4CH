// =============================================================
// Addon catalog — Zod schema
// =============================================================
// Source of truth for the BlenderAddons4CH catalog. One Markdown file per
// tool under `data/addons/<slug>.md`; this schema validates the frontmatter.
//
// In the Astro site (blender.extendedmatrix.org) wrap it like:
//
//   import { defineCollection } from 'astro:content';
//   import { glob } from 'astro/loaders';
//   import { addonSchema } from '../../data/schema';
//   const addons = defineCollection({
//     loader: glob({ pattern: '**/*.md', base: '../data/addons' }),
//     schema: addonSchema,
//   });
//
// Standalone (Node tooling): `import { z } from 'zod'`.
// =============================================================

import { z } from 'zod';

export const CATEGORIES = [
  'photogrammetry',
  'point-cloud',
  'gaussian-splatting',
  'bim-hbim',
  'modelling',
  'retopology',
  'uv',
  'texturing',
  'materials',
  'sculpting',
  'vertex-paint',
  'baking',
  'rendering',
  'camera',
  'animation',
  'compositor',
  'gis-landscape',
  'simulation',
  'exchange',
  'documentation',
  'interface',
  'coding',
  'libraries',
  'themes',
  'misc',
] as const;

export const addonSchema = z.object({
  // Identity
  name: z.string(),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),

  // Taxonomy
  category: z.enum(CATEGORIES),
  platform: z.enum(['blender', 'standalone', 'web']),

  // Status / health
  status: z.enum(['maintained', 'legacy', 'dead', 'unknown']),
  recommended: z.boolean().default(false),
  emPipeline: z.boolean().default(false),

  // Metadata (all optional / best-effort)
  blenderVersion: z.string().optional(),
  license: z.string().optional(),
  stars: z.number().int().nonnegative().optional(),
  added: z.string().optional(),
  lastVerified: z.string(),

  // Discovery
  tags: z.array(z.string()).default([]),
  links: z
    .array(z.object({ label: z.string(), url: z.string().url() }))
    .default([]),

  // Cards
  summary: z.string(),
});

export type Addon = z.infer<typeof addonSchema>;
