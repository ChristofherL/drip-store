import { type ComponentProps, useId } from "react"

interface InputProps extends ComponentProps<"input"> {
	label?: string
}

export function Input({ label, ...rest }: InputProps) {
	const id = useId()

	return (
		<div className="w-full form-field">
			{label && (
				<label
					className="form-label text-xs font-bold text-gray-600"
					htmlFor={id}>
					{label}
				</label>
			)}
			<input
				className="input input-solid bg-gray-50 input-block lg:input-lg"
				id={id}
				type="text"
				{...rest}
			/>
		</div>
	)
}
