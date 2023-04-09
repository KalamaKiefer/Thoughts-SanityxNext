module.exports = {
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				header: ["Sassy Frass", "cursive"],
				prime: ["Nunito", "sans-serif"],
			},
			colors: {
				primary: "#111827",

				secondary: "#fbcfe8",

				accent: "#b8bedd",

				neutral: "#f0e6ef",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("tailwind-scrollbar-hide"),
	],
}
