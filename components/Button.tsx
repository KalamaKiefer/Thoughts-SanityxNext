import * as React from "react"
import clsx from "clsx"
import { Link, type LinkProps } from "./Link"

type PlainButtonProps = React.ComponentPropsWithoutRef<"button">
export type ButtonProps = PlainButtonProps | LinkProps

/**
 * A component that smartly renders a <button> element or a `<Link />` component
 * based on the presence of the `href` prop.
 */
export const Button = React.forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	ButtonProps
>(({ children, className, ...props }, ref) => {
	const classNames = clsx("inline-flex items-center justify-center", className)

	if ("href" in props) {
		return (
			<Link
				className={classNames}
				ref={ref as React.ForwardedRef<HTMLAnchorElement>}
				{...(props as LinkProps)}
			>
				{children}
			</Link>
		)
	}

	return (
		<button
			ref={ref as React.ForwardedRef<HTMLButtonElement>}
			className={classNames}
			{...(props as PlainButtonProps)}
		>
			{children}
		</button>
	)
})

Button.displayName = "Button"
