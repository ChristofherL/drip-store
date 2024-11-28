import { currencyFormat } from "../../utils/currencyFormat"

export function Product() {
	return (
		<li>
			<div className="h-auto bg-white flex justify-center items-center relative mb-2 rounded-md shadow-sm lg:w-72">
				<img
					className=""
					src="assets/tennis.png"
					alt=""
				/>
			</div>
			<span className="text-xs font-bold text-gray-400">Tênis</span>
			<p className="text-sm lg:text-2xl text-gray-700">
				K-Swiss V8 - Masculino
			</p>
			<div className="text-base lg:text-2xl">
				<span className="text-gray-400 mr-2 line-through">
					{currencyFormat(200)}
				</span>
				<strong>{currencyFormat(100)}</strong>
			</div>
		</li>
	)
}
