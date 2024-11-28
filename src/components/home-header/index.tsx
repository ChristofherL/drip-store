import { AlignJustify, Search, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const links = [
	{
		title: "Home",
		path: "/home"
	},
	{
		title: "Produtos",
		path: "/products"
	},
	{
		title: "Categorias",
		path: "/categories"
	},
	{
		title: "Meus Pedidos",
		path: "/meus-pedidos"
	}
]

export function HomeHeader() {
	const [searchBarIsOpen, setSearchBarIsOpen] = useState(false)
	const [sideBarIsOpen, setSideBarIsOpen] = useState(false)

	return (
		<header className="w-full bg-white lg:flex lg:justify-center">
			<div className="w-full lg:w-10/12 lg:pt-10 lg:pb-6 lg:p-0">
				<div className="flex bg-white p-4 justify-between items-center fixed right-0 left-0 z-50 lg:gap-10 lg:static">
					<AlignJustify
						className="lg:hidden"
						onClick={() => setSideBarIsOpen((state) => !state)}
					/>
					<img
						className="w-[138px] lg:w-[253px] lg:h-11"
						src="assets/pink-logo.png"
						alt="digital store"
					/>
					<Search
						className="lg:hidden"
						onClick={() => setSearchBarIsOpen((state) => !state)}
					/>
					<ShoppingCart className="lg:order-1" />
					<form
						className={`bg-white p-3 absolute -bottom-16 right-0 left-0 lg:flex-1 lg:static transition-all duration-500 ease-out ${searchBarIsOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-14 invisible"} lg:block lg:visible lg:opacity-100 lg:translate-y-0`}>
						<Input placeholder="Pesquisar produtos..." />
					</form>
					<div className="hidden lg:flex lg:items-center lg:gap-4">
						<Link
							className="underline"
							to="/">
							Cadastre-se
						</Link>
						<Button>Entrar</Button>
					</div>
				</div>
				<nav
					className={`z-50 flex flex-col justify-between fixed bg-white w-5/6 p-4 left-0 top-14 bottom-0 transition-all duration-500 ease-in-out ${sideBarIsOpen ? "opacity-100 translate-x-0 visible" : "opacity-0 -translate-x-[366px] invisible"} lg:static lg:flex-row lg:h-auto lg:w-full lg:visible lg:opacity-100 lg:translate-x-0`}>
					<div>
						<strong className="block mb-3 text-zinc-800 lg:hidden">
							Páginas
						</strong>
						<ul className="flex flex-col gap-3 lg:flex-row lg:gap-8">
							{links.map((link, idx) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<li key={idx}>
									<NavLink
										to={link.path}
										className={({ isActive }) =>
											isActive
												? "text-primary font-semibold border-b-2 border-primary pb-1"
												: "text-gray-800 font-normal"
										}>
										{link.title}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col items-center pt-4 border-t border-gray-300 lg:hidden">
						<Button className="btn-block mb-3">Entrar</Button>
						<Link
							to="/sign-up"
							className="underline">
							Cadastre-se
						</Link>
					</div>
				</nav>
			</div>
		</header>
	)
}
