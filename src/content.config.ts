import { defineCollection, z } from "astro:content";

const designSchema = z.object({
	bgType: z.string(),
	bgValue: z.string(),
	fontFamily: z.string(),
	textColor: z.string(),
});

const linkSchema = z.object({
	type: z.string(),
	title: z.string(),
	url: z.string(),
});

const perfilContent = defineCollection({
	type: "data",
	schema: z.object({
		slug: z.string(),
		name: z.string(),
		bio: z.string(),
		design: designSchema,
		links: z.array(linkSchema),
	}),
});

export const collections = { perfil: perfilContent };
