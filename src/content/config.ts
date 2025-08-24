import { defineCollection, z } from 'astro:content';

// Define the schema for documentation pages
const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.enum(['core', 'data-hub', 'model-lab', 'design-engineering', 'workflow', 'deprecated']).optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    date: z.date().optional(),
    lastUpdated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    order: z.number().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

// Define the schema for meeting notes
const meetingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.enum(['scrum', 'mentor', 'po-communication', 'general']),
    attendees: z.array(z.string()).optional(),
    agenda: z.array(z.string()).optional(),
    summary: z.string().optional(),
    actionItems: z.array(z.string()).optional(),
    nextMeeting: z.date().optional(),
  }),
});

// Define the schema for technical references
const techRefCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    version: z.string().optional(),
    author: z.string().optional(),
    date: z.date().optional(),
    lastUpdated: z.date().optional(),
  }),
});

export const collections = {
  'docs': docsCollection,
  'meetings': meetingsCollection,
  'tech-refs': techRefCollection,
};
