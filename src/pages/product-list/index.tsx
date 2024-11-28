import { Filter, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import { Footer } from "../../components/footer"
import { HomeHeader } from "../../components/home-header"
import { Product } from "../../components/product"
import { Button } from "../../components/ui/button"

// O(n)
const filters = [
	{
		title: "Marka",
		type: "checkbox",
		items: ["Adiddas", "Calenciaga", "K-Swiss", "Nike", "Puma"]
	},
	{
		title: "Categoria",
		type: "checkbox",
		items: ["Esporte", "Utilitario", "Corrida"]
	},
	{
		title: "Gênero",
		type: "checkbox",
		items: ["Masculino", "Feminino", "Unisex"]
	},
	{
		title: "Estado",
		type: "radio",
		items: ["Novo", "Usado"]
	}
]

export function ProductListPage() {
	const [filterBarIsOpen, setFilterBarIsOpen] = useState(false)

	return (
		<main>
			<HomeHeader />
			<section className="w-full flex justify-center pt-4">
				<div className="w-full p-4 lg:w-10/12">
					<div className="w-full flex flex-col  lg:flex-row  lg:justify-between lg:items-center text-zinc-600 my-12">
						<span className="order-2 lg:order-1">
							<strong>
								Resultados para <q>Tênis</q>-
							</strong>
							389 produtos
						</span>
						<div className="flex gap-2 mb-4 lg:order-2 lg:mb-0">
							<select className="select">
								<option>Ordenar por: mais relevante</option>
							</select>
							<Button
								className="lg:hidden"
								onClick={() => setFilterBarIsOpen((state) => !state)}>
								<Filter />
							</Button>
						</div>
					</div>
					<div className="w-full flex items-start gap-6 pb-14">
						<aside
							className={`w-5/6 fixed z-50 rounded-none p-6 top-14 left-0 bottom-0 lg:w-1/4 lg:p-6 lg:rounded-md bg-white transition-all duration-500 ease-in-out ${filterBarIsOpen ? "opacity-100 translate-x-0 visible" : "opacity-0 -translate-x-[366px] invisible"} lg:visible lg:opacity-100 lg:translate-x-0 lg:static`}>
							<div className="flex justify-between items-center pb-4 mb-4 border-b border-zinc-300">
								<strong className=" text-zinc-600">Filtrar por</strong>
								<X
									className="lg:hidden"
									onClick={() => setFilterBarIsOpen((state) => !state)}
								/>
							</div>
							<ul className="flex flex-col gap-2">
								{filters.map((filter, idx) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<Fragment key={idx}>
										<strong className="text-sm text-zinc-600">
											{filter.title}
										</strong>
										{filter.items.map((item, idx) => (
											<li
												// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
												key={idx}
												className="flex items-center gap-3">
												<input
													type={filter.type}
													className="checkbox-primary checkbox"
													id={item}
												/>
												<label
													htmlFor={item}
													className="text-zinc-600 text-sm text">
													{item}
												</label>
											</li>
										))}
									</Fragment>
								))}
							</ul>
						</aside>
						<ul className="w-full flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:justify-between lg:gap-6">
							{Array.from({ length: 15 }, (_, k) => k).map((k) => (
								<Link
									to="/products/tennis"
									key={k}>
									<Product />
								</Link>
							))}
						</ul>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	)
}
