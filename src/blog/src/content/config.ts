import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    author: z.string().default('Alex Donega'),
    image: z.string().optional(),
    // Metadados do Obsidian
    tipo_nota: z.string().nullable().optional(),
    area: z.string().nullable().optional(),
    projeto: z.string().nullable().optional(),
    url_original: z.string().nullable().optional(),
  }),
});

export const collections = { blog };
