import { Button } from "../ui/button"

export function Card() {
	return (
		<li className="bg-blue-100 p-4 rounded-lg overflow-hidden relative lg:flex-1 lg:h-[250px] lg:p-7">
			<div className="flex flex-col items-start gap-2 z-50">
				<span className="rounded-2xl bg-lime-200 text-zinc-800 py-1 px-2 text-sm font-bold">
					30% OFF
				</span>
				<strong className="text-zinc-800 text-[28px] font-bold leading-7 lg:text-[32px]">
					Novo drop Supreme
				</strong>
				<Button variant="secondary">Comprar</Button>
			</div>
			<img
				className="w-40 absolute right-0 top-0 lg:w-60"
				src="assets/supreme-shirt.png"
				alt=""
			/>
		</li>
	)
}
