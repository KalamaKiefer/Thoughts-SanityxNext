import * as React from "react"
import type { InferGetServerSidePropsType } from "next"
import { type NextPageWithLayout } from "./_app"
import { sanityClient, groq } from "@/sanity/client"
import PostCard from "@/components/PostCard"
import PostForm from "@/components/PostForm"

type HomePageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const HomePage: NextPageWithLayout<HomePageProps> = ({ data }) => {
	const allPosts = data.posts
	return (
		<main className="bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center max-h-screen overflow-hidden">
				<h2 className="text-center text-primary pt-6 text-5xl font-header">
					Thoughts...
				</h2>
				<div className="w-full bg-secondary bg-opacity-70  h-[0.3px] mt-4" />
				<PostForm />
				<div className="flex flex-col overflow-y-auto scrollbar-hide">
					{allPosts ? (
						allPosts.map((post) => {
							return (
								<PostCard
									key={post._id}
									postId={post._id}
									userName={post.userName}
									date={post._createdAt ?? ""}
									text={post.postText}
									likes={post.likes}
									className="last:mb-40 flex flex-col"
								/>
							)
						})
					) : (
						<h2>No Posts Rn</h2>
					)}
				</div>
			</div>
		</main>
	)
}

export type Keyed<T> = T & { _key?: string; _id?: string }
export type Post = Keyed<{
	userName: string
	postText: string
	likes: number
	_createdAt?: string
	_id: string
}>

export async function getServerSideProps() {
	const query = groq`
        {
            "posts": *[_type == "post"] | order(_createdAt desc) {
                ...,
            }
        }
    `

	const data = await sanityClient.fetch<{ posts: Post[] }>(query)

	return {
		props: {
			data,
		},
	}
}

export default HomePage
