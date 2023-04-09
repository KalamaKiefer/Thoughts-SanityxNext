/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
	swcMinify: true,
	reactStrictMode: true,
	images: {
		formats: ["image/avif", "image/webp"],
		domains: ["api.dicebear.com"],
	},
	experimental: {
		scrollRestoration: true,
		legacyBrowsers: false,
	},
}

export default nextConfig
