import { sanityClient } from "@/sanity/client"
import { NextApiResponse } from "next"
import { NextRequest } from "next/server"
import { z } from "zod"

const NewPost = z.object({
	userName: z.string(),
	postText: z.string(),
})

export type NewPost = z.infer<typeof NewPost>

export default async function handler(
	request: NextRequest,
	response: NextApiResponse,
) {
	const body = request.body

	const res = await sanityClient.create(
		{ _type: "post", ...body },
		{
			token: process.env.SANITY_API_TOKEN,
		},
	)

	return response.status(200).json(res)
}