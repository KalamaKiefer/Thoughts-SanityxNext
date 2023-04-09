import clsx from "clsx"

export interface BlockContainerProps {
	children: React.ReactNode
	blockName: string
	className?: string
	paddingY?: keyof typeof paddingYSizes
}

const paddingYSizes = { default: "py-12 lg:py-10" }

export const BlockContainer = ({
	children,
	blockName,
	className,
	paddingY = "default",
}: BlockContainerProps) => {
	return (
		<section
			data-block-name={blockName}
			className={clsx("px-3 lg:px-9", className, paddingYSizes[paddingY])}
		>
			<div className="max-w-[90rem] w-full mx-auto">{children}</div>
		</section>
	)
}
