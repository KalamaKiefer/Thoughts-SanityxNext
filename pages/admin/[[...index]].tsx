import Head from "next/head"
import { NextStudio } from "next-sanity/studio"
import { NextStudioHead } from "next-sanity/studio/head"

import config from "@/sanity.config"

const AdminPage = () => {
	return (
		<>
			<Head>
				<NextStudioHead />
			</Head>

			<NextStudio config={config} />
		</>
	)
}

export default AdminPage
