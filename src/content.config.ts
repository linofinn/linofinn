import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const prints = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/prints",
  }),

  schema: z.object({
    title: z.string(),
    year: z.number(),
    dimensions: z.string(),
    paper: z.string(),
    edition: z.string(),
    price: z.string().optional(),
    available: z.boolean(),
  }),
});

export const collections = {
  prints,
};