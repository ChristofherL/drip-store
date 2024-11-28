import { NavLink } from "react-router-dom"
import { Footer } from "../../components/footer"
import { HomeHeader } from "../../components/home-header"

const links = [
	{
		name: "Meus Pedidos",
		path: "/meus-pedidos"
	},
	{
		name: "Minhas Informaações",
		path: "/minhas-informacoes"
	},
	{
		name: "Metodos de Pagamentos",
		path: "/metodos-pagamentos"
	}
]

export function OrdersPage() {
	return (
		<main>
			<HomeHeader />
			<div className="bg-zinc-100 w-full flex justify-center">
				<div className="p-6 lg:w-10/12 lg:flex lg:gap-4 lg:mt-14 lg:pb-28 lg:items-start">
					<section className="hidden bg-white lg:p-6 lg:w-1/4 lg:block">
						<h2 className="text-zinc-800 font-semibold lg:text-sm lg:mb-4">
							Meu Perfil
						</h2>
						<ul>
							{links.map((link) => (
								<li
									key={link.name}
									className="lg:py-4 border-t border-zinc-300">
									<NavLink
										to={link.path}
										className={({ isActive }) =>
											isActive
												? "lg:text-sm text-primary font-bold"
												: "text-gray-800 font-semibold lg:text-sm"
										}>
										{link.name}
									</NavLink>
								</li>
							))}
						</ul>
					</section>
					<section className="w-full p-6 bg-white lg:p-6 lg:w-3/4">
						<div className="lg:flex lg:justify-between lg:items-center mb-4">
							<h2 className="text-zinc-800 font-semibold lg:text-sm">
								Meus Pedidos
							</h2>
							<span className="hidden lg:block lg:text-sm text-zinc-800 uppercase font-semibold">
								status
							</span>
						</div>
						<ul>
							{Array.from({ length: 5 }, (_, k) => k).map((k) => {
								return (
									<li
										key={k}
										className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-4 border-t border-zinc-300">
										<div className="flex items-start lg:items-center gap-4 mb-4 lg:mb-0">
											<div className="p-4 bg-indigo-200 rounded-md">
												<img
													className="w-[50px] h-[25px]"
													src="assets/tennis-slider.png"
													alt=""
												/>
											</div>
											<div className="flex flex-col gap-1">
												<span className="text-[10px] text-zinc-400">
													Pedido nº 2234981932
												</span>
												<strong className="text-sm text-zinc-800 font-bold">
													Tênis Nike Revolution 6 Next Nature Masculino
												</strong>
											</div>
										</div>
										<div className="flex justify-between items-center">
											<span className="lg:hidden block text-xs lg:text-sm text-zinc-800 uppercase font-semibold">
												status
											</span>
											<strong className="text-xs lg:text-sm font-bold text-warning">
												Produto em trânsito
											</strong>
										</div>
									</li>
								)
							})}
						</ul>
					</section>
				</div>
			</div>
			<Footer />
		</main>
	)
}
