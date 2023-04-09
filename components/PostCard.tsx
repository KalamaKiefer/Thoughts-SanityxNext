/* eslint-disable @next/next/no-img-element */
"use client"

import clsx from "clsx"
import React, { useEffect, useState } from "react"

interface PostTypes {
	userName: string
	text: string
	date: string
	className?: string
}

const PostCard = ({ userName, text, date, className }: PostTypes) => {
	const [datee, setDate] = useState("")

	useEffect(() => {
		const uploaded = new Date(date)
		setDate(uploaded.toLocaleString())
	}, [date])

	return (
		<div className={clsx("border-b border-accent", className)}>
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
		</div>
	)
}

export default PostCard
