import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    date: z.string(),
    title: z.string(),
    titleEn: z.string().optional(),
    venue: z.string(),
    venueEn: z.string().optional(),
    url: z.string().optional(),
    lang: z.enum(['fr', 'en', 'both']),
  }),
});

const reads = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reads' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    status: z.enum(['reading', 'finished']),
    lang: z.enum(['fr', 'en', 'both']),
    url: z.string().optional(),
    source: z.string().optional(),
    sourceEn: z.string().optional(),
  }),
});

const contributions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/contributions' }),
  schema: z.object({
    group: z.enum(['strategy', 'code']),
    order: z.number(),
    year: z.number(),
    text: z.string(),
    textEn: z.string(),
    url: z.string().optional(),
    urlText: z.string().optional(),
  }),
});

export const collections = { publications, reads, contributions };
