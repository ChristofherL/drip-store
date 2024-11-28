import { Link } from "react-router-dom"
import { Card } from "../../components/card"
import { Footer } from "../../components/footer"
import { HomeHeader } from "../../components/home-header"
import { RelatedProducts } from "../../components/related-products"
import { Button } from "../../components/ui/button"

export function Home() {
	return (
		<main>
			<HomeHeader />
			<section className="bg-zinc-50 w-full flex justify-center py-14">
				<div className="w-10/12 lg:flex lg:items-center">
					<img
						className="lg:w-[730px] lg:h:430px lg:order-2"
						src="assets/tennis-nike-iar.png"
						alt=""
					/>
					<div className="text-center flex flex-col gap-4 lg:order-1 lg:text-start lg:gap-10">
						<strong className="text-sm text-primary lg:text-warning">
							Melhores ofertas personalizadas
						</strong>
						<h1 className="text-zinc-800 text-4xl font-bold lg:text-[64px]">
							Queima de stoque Nike 🔥
						</h1>
						<p className="text-sm text-zinc-800 lg:text-lg">
							Consequat culpa exercitation mollit nisi excepteur do do tempor
							laboris eiusmod irure consectetur.
						</p>
						<Button className="lg:w-2/6">Ver ofertas</Button>
					</div>
				</div>
			</section>
			<section className="w-full flex justify-center">
				<div className="w-10/12">
					<h1 className="font-bold text-zinc-800 lg:text-2xl mb-4">
						Coleções em destaque
					</h1>
					<ul className="flex flex-col gap-2 lg:flex-row lg:flex-wrap">
						{Array.from({ length: 3 }, (_, k) => k).map((k) => (
							<Card key={k} />
						))}
					</ul>
				</div>
			</section>
			<section className="w-full flex justify-center bg-gray-50">
				<div className="w-10/12 my-16">
					<div className="flex justify-between items-center mb-4">
						<h1 className="font-bold text-zinc-800 lg:text-2xl">
							Produtos em alta
						</h1>
						<Link
							className="text-primary text-sm lg:text-lg"
							to="/">
							Ver todos
						</Link>
					</div>
					<RelatedProducts length={8} />
				</div>
			</section>
			<section className="w-full flex justify-center items-center">
				<div className="w-full flex flex-col justify-around items-center gap-10 my-16 lg:w-10/12 lg:flex-row">
					<div className="size-[280px] rounded-full bg-gradient-to-b from-[#4200FF40] relative lg:size-[466px]">
						<img
							className="absolute top-14 w-[300px] h-[175px] lg:w-[570px] lg:h-[330px]"
							src="assets/tennis-offer.png"
							alt=""
						/>
					</div>
					<div className="w-full flex flex-col gap-4 px-6 lg:w-1/2">
						<strong className="text-sm text-warning">Oferta especial</strong>
						<h1 className="text-[28px] leading-8 text-zinc-800 font-bold lg:text-5xl">
							Air Jordan edição de colecionador
						</h1>
						<p className="text-zinc-800 text-sm lg:text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip
						</p>
						<Button className="w-1/2">Ver oferta</Button>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	)
}
