import { Facebook, Instagram, Twitter } from "lucide-react"
const listItems = [
	{
		title: "Informação",
		items: [
			"Sobre Drip Store",
			"Segurança",
			"Wishlist",
			"Blog",
			"Trabalha conosco",
			"Meus Pedidos"
		]
	},
	{
		title: "Categorias",
		items: ["Camisetas", "Calças", "Bonés", "Headphones", "Tênis"]
	},
	{
		title: "Contato",
		items: [
			"Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
			"(85) 3051-3411"
		]
	}
]

export function Footer() {
	return (
		<footer className="w-full bg-zinc-900 p-4 pt-8 lg:flex lg:flex-col lg:items-center">
			<div className="lg:w-10/12">
				<div className="lg:flex lg:gap-72">
					<div className="w-full">
						<img
							className="w-36 h-8 mb-3 lg:w-52 lg:h-11 lg:mb-8"
							src="assets/white-logo.png"
							alt="digital store"
						/>
						<p className="text-white text-sm lg:text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore.
						</p>
						<ul className="flex gap-6 my-6 text-white">
							<li>
								<a href="/">
									<Facebook />
								</a>
							</li>
							<li>
								<a href="/">
									<Instagram />
								</a>
							</li>
							<li>
								<a href="/">
									<Twitter />
								</a>
							</li>
						</ul>
					</div>
					<nav className="w-full">
						<ul className="flex gap-6 flex-wrap lg:justify-between">
							{listItems.map((item) => (
								<li
									key={item.title}
									className="lg:max-w-52">
									<strong className="text-white text-lg block mb-2 lg:mb-8">
										{item.title}
									</strong>
									<ul>
										{item.items.map((i) => (
											<li
												className="text-white mb-2"
												key={i}>
												{i}
											</li>
										))}
									</ul>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<span className="w-full block text-center text-sm text-white border-t border-gray-600 p-4 mt-6">
					@ 2022 Digital College
				</span>
			</div>
		</footer>
	)
}
