import { defineCollection, z } from "astro:content";

const prints = defineCollection({

    type: "content",

    schema: z.object({

        title: z.string(),

        year: z.number(),

        dimensions: z.string(),

        paper: z.string(),

        edition: z.string(),

        price: z.string(),

        available: z.boolean()

    })

});

export const collections = {

    prints

};