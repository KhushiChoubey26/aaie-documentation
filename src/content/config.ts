import { defineCollection, z } from 'astro:content';

// Core AAIE documentation collection
const aaieCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.enum(['core', 'general', 'overview']).optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    date: z.date().optional(),
    lastUpdated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    order: z.number().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

// Data Hub documentation collection
const dataHubCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.enum(['data', 'datasets', 'processing', 'workflows']).optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    date: z.date().optional(),
    lastUpdated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    order: z.number().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

// Model Lab documentation collection
const modelLabCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.enum(['models', 'ml', 'training', 'deployment']).optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    date: z.date().optional(),
    lastUpdated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    order: z.number().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

// Design Engineering documentation collection
const designEngineeringCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.enum(['design', 'ux', 'frontend', 'architecture']).optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    date: z.date().optional(),
    lastUpdated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    order: z.number().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

// Deprecated/Archive documentation collection
const deprecatedCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.enum(['deprecated', 'archive', 'historical']).optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    date: z.date().optional(),
    lastUpdated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    order: z.number().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

// Forking Workflow documentation collection
const forkingWorkflowCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.enum(['workflow', 'git', 'contribution', 'process']).optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    date: z.date().optional(),
    lastUpdated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    order: z.number().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'aaie': aaieCollection,
  'aaie-data-hub': dataHubCollection,
  'aaie-model-lab': modelLabCollection,
  'aaie-design-engineering': designEngineeringCollection,
  'deprecated': deprecatedCollection,
  'forking-worflow': forkingWorkflowCollection,
};
