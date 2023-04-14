import { sanityClient } from "@/sanity/client"
import { NextApiResponse } from "next"
import { NextRequest } from "next/server"
import { z } from "zod"

const LikePost = z.object({
	_id: z.string(),
	likes: z.number(),
})

export type LikedPost = z.infer<typeof LikePost>

export default async function handler(
	request: NextRequest,
	response: NextApiResponse,
) {
	const body = LikePost.safeParse(request.body)

	if (body.success) {
		const res = await sanityClient
			.patch(body.data._id)
			.inc({ likes: body.data.likes })
			.commit({ token: process.env.SANITY_API_TOKEN })
			.then(() => {})
			.catch((err) => {
				console.log(err)
			})

		return response.status(200).json(res)
	}

	return response.status(400).json("Error")
}
