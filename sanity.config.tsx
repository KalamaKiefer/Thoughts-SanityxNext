import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import Iframe from "sanity-plugin-iframe-pane"
import { visionTool } from "@sanity/vision"
import { config } from "@/sanity/config"
import { schemaTypes } from "@/sanity/schemas"
import { CogIcon } from "@heroicons/react/24/outline"

export default defineConfig({
	name: "default",
	basePath: "/admin",

	projectId: config.projectId,
	dataset: config.dataset,

	plugins: [
		deskTool({
			// Customize document previews.
			defaultDocumentNode: (S, { schemaType }) => {
				const url =
					process.env.NODE_ENV === "production"
						? "https://example.com"
						: "http://localhost:3000/api/preview"

				switch (schemaType) {
					case "page":
						return S.document().views([
							S.view.form(),
							S.view.component(Iframe).options({ url }).title("Preview"),
						])

					default:
						return S.document().views([S.view.form()])
				}
			},

			// Customize the content sidebar.
			structure: (S) => {
				const hideFromNav = ["settings", "media.tag"]

				return S.list()
					.title("Content")
					.items([
						...S.documentTypeListItems().filter(
							(item) => !hideFromNav.includes(String(item.getId())),
						),
						S.listItem()
							.title("Settings")
							.child(S.document().schemaType("settings").documentId("settings"))
							.icon(() => <CogIcon width={24} />),
					])
			},
		}),
		visionTool(),
	],

	schema: { types: schemaTypes },
})
