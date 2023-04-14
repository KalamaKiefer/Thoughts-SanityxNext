import { sanityClient } from "@/sanity/client"
import { NextApiResponse } from "next"
import { NextRequest } from "next/server"
import { z } from "zod"

const NewPost = z.object({
	userName: z.string(),
	postText: z.string(),
	likes: z.number(),
})

export type NewPost = z.infer<typeof NewPost>

export default async function handler(
	request: NextRequest,
	response: NextApiResponse,
) {
	const body = NewPost.safeParse(request.body)

	if (body.success) {
		const res = await sanityClient.create(
			{ _type: "post", ...body.data },
			{
				token: process.env.SANITY_API_TOKEN,
			},
		)
		return response.status(200).json(res)
	}

	return response.status(404).json("Error")
}
