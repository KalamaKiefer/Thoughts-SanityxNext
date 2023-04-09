import { createClient } from "next-sanity"
import { config } from "./config"

export const sanityClient = createClient({
	...config,
	useCdn: false,
})

export { groq } from "next-sanity"
