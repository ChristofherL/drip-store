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

export function MyInformationsPage() {
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
						<div className="lg:flex lg:justify-between lg:items-center pb-4">
							<h2 className="text-zinc-800 font-semibold lg:text-sm">
								Minhas Informações
							</h2>
							<span className="hidden lg:block lg:text-sm text-primary border-b border-primary font-semibold">
								Editar
							</span>
						</div>
						<ul className="flex flex-col gap-1 py-4 border-t border-zinc-300">
							<strong className="text-start text-zinc-800 font-semibold lg:text-sm mb-2">
								Informações Pessoais
							</strong>
							<li className="flex gap-3">
								<span className="text-sm text-zinc-400 font-semibold text-start">
									Nome:
								</span>
								<strong className="text-sm text-zinc-800 font-semibold">
									Christofher Lucas
								</strong>
							</li>
							<li className="flex gap-3">
								<span className="text-sm text-zinc-400 font-semibold text-start">
									CPF:
								</span>
								<strong className="text-sm text-zinc-800 font-semibold">
									123.456.789-12
								</strong>
							</li>
							<li className="flex gap-3">
								<span className="text-sm text-zinc-400 font-semibold text-start">
									Email:
								</span>
								<strong className="text-sm text-zinc-800 font-semibold">
									christofherlucas@gmail.com
								</strong>
							</li>
							<li className="flex gap-3">
								<th className="text-sm text-zinc-400 font-semibold text-start">
									Celular:
								</th>
								<td className="text-sm text-zinc-800 font-semibold">
									82 40028922
								</td>
							</li>
						</ul>
						<ul className="flex flex-col gap-1 pt-4 border-t border-zinc-300">
							<strong className="text-start text-zinc-800 font-semibold lg:text-sm mb-2">
								Informações de Entrega
							</strong>
							<li className="flex gap-3">
								<span className="text-sm text-zinc-400 font-semibold text-start">
									Endereço:
								</span>
								<strong className="text-sm text-zinc-800 font-semibold">
									Rua da esperança
								</strong>
							</li>
							<li className="flex gap-3">
								<span className="text-sm text-zinc-400 font-semibold text-start">
									Bairro:
								</span>
								<strong className="text-sm text-zinc-800 font-semibold">
									Cruzeiro
								</strong>
							</li>
							<li className="flex gap-3">
								<span className="text-sm text-zinc-400 font-semibold text-start">
									Cidade:
								</span>
								<strong className="text-sm text-zinc-800 font-semibold">
									Coruripe
								</strong>
							</li>
							<li className="flex gap-3">
								<span className="text-sm text-zinc-400 font-semibold text-start">
									CEP:
								</span>
								<strong className="text-sm text-zinc-800 font-semibold">
									57230000
								</strong>
							</li>
						</ul>
					</section>
				</div>
			</div>
			<Footer />
		</main>
	)
}
