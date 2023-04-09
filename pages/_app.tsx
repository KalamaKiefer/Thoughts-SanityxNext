import * as React from "react"
import { type AppProps } from "next/app"
import { type NextPage } from "next"

import "../styles/index.css"

export type NextPageWithLayout<P = Record<string, unknown>> = NextPage<P> & {
	getLayout?: (page: React.ReactElement<P>) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function defaultGetLayout(page: React.ReactElement) {
	return page
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? defaultGetLayout

	return (
		<React.Suspense>{getLayout(<Component {...pageProps} />)}</React.Suspense>
	)
}

export default App
