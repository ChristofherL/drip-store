import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends ComponentProps<"button"> {
	variant?: keyof typeof variants
}

const variants = {
	primary: "btn-primary hover:bg-[#991956] disabled:bg-[#CCCCCC]",
	secondary:
		"bg-[#F5F5F5] text-primary hover:bg-[#B5B6F2] hover:text-white disabled:border disabled:border-primary",
	tertiary: "btn-warning hover:bg-[#CF8900] disabled:bg-[#CCCCCC]:",
	ghost: "btn bg-transparent border border-zinc-300"
}

export function Button({
	children,
	variant = "primary",
	className,
	...rest
}: ButtonProps) {
	return (
		<button
			className={twMerge("btn btn-md lg:btn-lg ", variants[variant], className)}
			{...rest}>
			{children}
		</button>
	)
}
