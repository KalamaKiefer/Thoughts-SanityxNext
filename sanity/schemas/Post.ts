import { defineField, defineType } from "sanity"

export const Post = defineType({
	title: "Post",
	type: "document",
	name: "post",
	readOnly: true,

	fields: [
		defineField({
			name: "userName",
			type: "string",
			title: "Username",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "postText",
			type: "string",
			title: "Post Text",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "likes",
			type: "number",
			title: "Likes",
		}),
	],
})
