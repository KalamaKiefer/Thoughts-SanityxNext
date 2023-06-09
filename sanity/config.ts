import { z } from "zod"

const Config = z.object({
	projectId: z.string(),
	dataset: z.string().default("production"),
	apiVersion: z.string().default("2023-02-10"),
})

export const config = Config.parse({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
	token: process.env.SANITY_API_TOKEN,
})
