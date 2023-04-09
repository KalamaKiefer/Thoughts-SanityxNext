"use client"
import { type Post } from "@/pages"
import Router from "next/router"
import React, { useState } from "react"

type FormState = "init" | "submitting" | "error"

const PostForm = () => {
	const [state, setState] = React.useState<FormState>("init")

	const [name, setName] = useState("")
	const [post, setPost] = useState("")

	const createPost: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()
		setState("submitting")

		const newPost: Post = {
			userName: name,
			postText: post,
		}

		const res = await fetch("/api", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newPost),
		})

		if (!res.ok) return setState("error")

		setName("")
		setPost("")
		Router.reload()

		return setState("init")
	}

	return (
		<form
			className="flex flex-col bg-secondary shadow-xl rounded-xl px-2 py-4 gap-6 mt-[2rem] max-w-[500px]"
			onSubmit={createPost}
			method="POST"
		>
			<input
				type="text"
				placeholder="Display Name"
				className="input input-bordered input-primary w-full placeholder:text-black placeholder:font-header placeholder:text-2xl font-prime text-lg bg-white focus:ring-0"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<textarea
				className="textarea textarea-primary placeholder:text-black placeholder:font-header placeholder:text-2xl font-prime text-lg bg-white focus:ring-0"
				placeholder="Write Some Thoughts?"
				value={post}
				onChange={(e) => setPost(e.target.value)}
			/>
			<button
				className="bg-primary border-none text-secondary hover:bg-secondary hover:text-black ease-in-out transition duration-300 border border-black py-2 rounded-full"
				type="submit"
			>
				Submit
			</button>
		</form>
	)
}

export default PostForm
