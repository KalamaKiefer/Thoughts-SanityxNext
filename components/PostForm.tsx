"use client"
import { type Post } from "@/pages"
import Router from "next/router"
import React, { useState } from "react"
import { Spinner } from "./icons/Spinner"

type FormState = "init" | "submitting" | "error"

const PostForm = () => {
	const [state, setState] = React.useState<FormState>("init")

	const [name, setName] = useState("")
	const [post, setPost] = useState("")

	const createPost: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()
		setState("submitting")

		const newPost: Partial<Post> = {
			userName: name,
			postText: post,
			likes: 0,
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

	const getButtonContents = () => {
		switch (state) {
			case "init":
				return "Submit"
			case "submitting":
				return <Spinner className="w-6" />
			default:
				null
		}
	}

	return (
		<form
			className="flex flex-col bg-secondary shadow-xl rounded-xl px-2 py-4 gap-6 mt-[2rem] max-w-[500px] lg:max-w-[700px] self-center w-full"
			onSubmit={createPost}
			method="POST"
		>
			<input
				type="text"
				placeholder="Display Name"
				className="input input-primary w-full placeholder:text-black placeholder:font-header placeholder:text-2xl font-prime text-lg bg-white focus:ring-0 outline-none focus:border-primary"
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
			/>
			<textarea
				className="textarea textarea-primary placeholder:text-black placeholder:font-header placeholder:text-2xl font-prime text-lg bg-white focus:ring-0 focus:border-primary"
				placeholder="Write Some Thoughts?"
				value={post}
				onChange={(e) => setPost(e.target.value)}
				required
			/>
			<button
				className="bg-primary border-none text-secondary lg:hover:bg-secondary lg:hover:text-black ease-in-out transition duration-300 border border-black py-2 rounded-full flex justify-center"
				type="submit"
			>
				{getButtonContents()}
			</button>
		</form>
	)
}

export default PostForm
