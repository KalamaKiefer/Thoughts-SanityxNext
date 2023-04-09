import { Html, Head, Main, NextScript } from "next/document"

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Sassy+Frass&display=swap"
					rel="stylesheet"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito&family=Sassy+Frass&display=swap"
					rel="stylesheet"
				></link>
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
