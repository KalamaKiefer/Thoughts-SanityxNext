/* eslint-disable @next/next/no-img-element */

import { type Post } from "@/pages"
import { useAuthStore } from "@/store/authStore"
import clsx from "clsx"
import React, { useEffect, useState } from "react"
import { Heart } from "./icons/Heart"

interface PostTypes {
	postId: string
	userName: string
	text: string
	date: string
	likes: number
	className?: string
}

const PostCard = ({
	postId,
	userName,
	text,
	date,
	likes,
	className,
}: PostTypes) => {
	const [datee, setDate] = useState("")
	const [isLiked, setIsLiked] = useState<boolean>(false)
	const [currentLikes, setLikes] = useState<number>(likes)

	useEffect(() => {
		const uploaded = new Date(date)
		setDate(uploaded.toLocaleString())
	}, [date])

	const likePost = async () => {
		if (isLiked) {
			setIsLiked(false)
			setLikes(currentLikes - 1)

			const likePost: Partial<Post> = {
				_id: postId,
				likes: -1,
			}

			const res = await fetch("/api/likePost", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(likePost),
			})

			if (!res.ok) return new Error("error")
			return
		} else {
			setIsLiked(true)
			setLikes(currentLikes + 1)

			const likePost: Partial<Post> = {
				_id: postId,
				likes: 1,
			}

			const res = await fetch("/api/likePost", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(likePost),
			})
			if (!res.ok) return new Error("error")
			return
		}
	}

	return (
		<div className={clsx("border-b border-accent w-full", className)}>
			<ul role="list" className="">
				<li className="py-4">
					<div className="flex space-x-3">
						<img
							className="h-6 w-6 rounded-full"
							src={`https://api.dicebear.com/5.x/fun-emoji/svg?seed=${userName}`}
							alt=""
						/>
						<div className="flex-1 space-y-1">
							<div className="flex items-center justify-between">
								<h3 className="text-sm font-medium  text-secondary brightness-90">
									{userName}
								</h3>
								<p className="text-sm text-primary">{datee}</p>
							</div>
							<p className="text-sm text-gray-500">{text}</p>
						</div>
					</div>
				</li>
			</ul>
			<button
				className="mb-2 ml-auto flex items-center space-x-1"
				onClick={() => likePost()}
			>
				<p className="text-primary text-sm">{currentLikes}</p>
				<Heart
					className={clsx(
						"w-4 transition ease-in duration-200",
						isLiked ? "text-green-300 animate-pulse" : "text-gray-300",
					)}
				/>
			</button>
		</div>
	)
}

export default PostCard
