import { Footer } from "../../components/footer"
import { HomeHeader } from "../../components/home-header"
import { RelatedProducts } from "../../components/related-products"
import { Slider } from "../../components/slider"
import { SliderItem } from "../../components/slider-item"
import { Button } from "../../components/ui/button"
import { currencyFormat } from "../../utils/currencyFormat"

const sliderItems = [
	{
		itemImagePath: "assets/tennis-slider.png",
		color: "bg-indigo-100"
	},
	{
		itemImagePath: "assets/tennis-slider.png",
		color: "bg-amber-100"
	},
	{
		itemImagePath: "assets/tennis-slider.png",
		color: "bg-red-100"
	},
	{
		itemImagePath: "assets/tennis-slider.png",
		color: "bg-emerald-100"
	},
	{
		itemImagePath: "assets/tennis-slider.png",
		color: "bg-stone-100"
	}
]

export function ProductDetailsPage() {
	return (
		<main>
			<HomeHeader />
			<section className="pt-20 w-full flex justify-center pb-32 p-6">
				<div className="w-full lg:w-10/12">
					<div className="w-full  lg:flex lg:gap-10">
						<div className="lg:w-7/12 mb-8">
							<Slider
								totalItems={sliderItems.length}
								render={() =>
									sliderItems.map((item, idx) => (
										<SliderItem
											key={idx}
											{...item}
										/>
									))
								}
								customControls={({ currentIdx, onChangeItem }) => (
									<ul className="flex justify-between gap-4 overflow-auto">
										{sliderItems.map((item, idx) => (
											// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
											<li
												key={idx}
												onClick={() => onChangeItem(idx)}
												className={`lg:w-[115px] lg:h-[95px] min-w-[60px] min-h-[60px] rounded-md flex justify-center items-center cursor-pointer lg:border-2 border ${item.color} ${idx === currentIdx ? "border-primary" : "border-transparent"}`}
											>
												<img
													className="lg:w-[80px] lg:h-[40px] w-[40px] h-[25px]"
													src={item.itemImagePath}
													alt=""
												/>
											</li>
										))}
									</ul>
								)}
							/>
						</div>

						<section className="lg:flex-1">
							<h1 className="text-2xl text-zinc-800 font-bold mb-2">
								Tênis Nike Revolution 6 Next Nature Masculino
							</h1>
							<div className="flex items-center gap-2 mb-2">
								<strong className="text-[32px] text-zinc-800 font-bold">
									{currencyFormat(219)}
								</strong>
								<span className="text-zinc-300 line-through">
									{currencyFormat(219)}
								</span>
							</div>
							<h2 className="text-sm text-zinc-400 font-bold mb-1">
								Descrição do produto
							</h2>
							<p className="text-sm text-zinc-600 font-semibold mb-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco.
							</p>
							<Button
								className="btn-block lg:w-1/3"
								variant="tertiary">
								Comprar
							</Button>
						</section>
					</div>
					<section className="w-full mt-20">
						<header className="flex justify-between items-center mb-6">
							<h2 className="text-base lg:text-2xl font-bold text-zinc-600">
								Produtos Relacionados
							</h2>
							<span className="text-sm lg:text-lg text-primary">Ver Todos</span>
						</header>
						<RelatedProducts length={4} />
					</section>
				</div>
			</section>

			<Footer />
		</main>
	)
}
