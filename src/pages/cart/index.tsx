import { Footer } from "../../components/footer"
import { HomeHeader } from "../../components/home-header"
import { RelatedProducts } from "../../components/related-products"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { currencyFormat } from "../../utils/currencyFormat"

export function CartPage() {
	return (
		<main>
			<HomeHeader />
			<div className="w-full pt-20 pb-4 px-6 lg:py-14 lg:flex lg:justify-center bg-[#F5F5F5]">
				<div className="lg:w-10/12 lg:flex lg:gap-4 lg:items-start">
					<div className="lg:w-3/4">
						<div className="w-full flex flex-col gap-4 mb-4 lg:bg-white">
							<section className="bg-white w-full p-6 rounded-sm">
								<div className="pb-4 mb-4 border-b border-zinc-300 flex justify-between items-center">
									<h2 className=" text-md text-zinc-800 font-bold uppercase flex-1">
										Meu carrinho
									</h2>
									<ul className="hidden lg:flex flex-1 justify-evenly">
										<li className="text-md text-zinc-800 font-semibold">
											Quantidade
										</li>
										<li className="text-md text-zinc-800 font-semibold">
											Unitário
										</li>
										<li className="text-md text-zinc-800 font-semibold">
											Total
										</li>
									</ul>
								</div>
								<div className=" lg:flex">
									<div className="flex gap-4 items-start flex-1">
										<div className="p-4 rounded-sm bg-indigo-100 lg:w-[125px] lg:h-[100px] lg:flex lg:justify-center lg:items-center">
											<img
												width={50}
												height={25}
												className="lg:w-[90px] lg:h-[45px]"
												src="assets/tennis-slider.png"
												alt=""
											/>
										</div>
										<strong className="text-sm text-zinc-800 font-bold lg:text-md">
											Tênis Nike Revolution 6 Next Nature Masculino
										</strong>
									</div>
									<strong className="lg:hidden text-sm uppercase text-zinc-800 my-4 block font-semibold">
										Quantidade
									</strong>
									<div className="flex justify-evenly items-center flex-1">
										<div className="w-full lg:w-36 lg:flex lg:flex-col">
											<div className="flex justify-between items-center gap-4">
												<Button
													variant="ghost"
													className="lg:w-9 lg:h-9 w-full">
													-
												</Button>
												<span className="text-zinc-800 text-sm font-bold">
													1
												</span>
												<Button
													variant="ghost"
													className="lg:w-9 lg:h-9 w-full">
													+
												</Button>
											</div>
											<span className="block mt-4 text-zinc-800 text-xs text-center underline">
												Remover item
											</span>
										</div>
										<div className="hidden lg:flex flex-col items-center">
											<span className="text-zinc-300 text-md line-through font-semibold">
												{currencyFormat(219)}
											</span>
											<strong className="text-zinc-800 font-bold">
												{currencyFormat(219)}
											</strong>
										</div>
										<div className="hidden lg:flex flex-col items-center">
											<span className="text-zinc-300 text-md line-through font-semibold">
												{currencyFormat(219)}
											</span>
											<strong className="text-zinc-800 font-bold">
												{currencyFormat(219)}
											</strong>
										</div>
									</div>
								</div>
							</section>
							<div className="flex flex-col lg:flex-row gap-4">
								<section className="bg-white lg:flex-row lg:items-end w-full p-6 rounded-sm flex flex-col gap-4">
									<Input
										label="Cupom de desconto"
										placeholder="Insira seu código"
									/>
									<Button
										variant="secondary"
										className="btn-block">
										Ok
									</Button>
								</section>
								<section className="bg-white lg:flex-row lg:items-end w-full p-6 rounded-sm flex flex-col gap-4">
									<Input
										label="Calcular frete"
										placeholder="Insira seu CEP"
									/>
									<Button
										variant="secondary"
										className="btn-block">
										Ok
									</Button>
								</section>
							</div>
							<section className="bg-white w-full p-6 rounded-sm lg:hidden">
								<h2 className="pb-4 mb-4 border-b border-zinc-300 text-md text-zinc-800 font-bold uppercase">
									Resumo
								</h2>
								<table className="w-full mb-4">
									<tr>
										<th className="text-zinc-400 text-start text-sm font-semibold">
											Subtotal:
										</th>
										<td className="text-zinc-800 text-end text-sm font-semibold">
											{currencyFormat(219)}
										</td>
									</tr>
									<tr>
										<th className="text-zinc-400 text-start text-sm font-semibold">
											Frete:
										</th>
										<td className="text-zinc-800 text-end text-sm font-semibold">
											{currencyFormat(0)}
										</td>
									</tr>
									<tr>
										<th className="text-zinc-400 text-start text-sm font-semibold">
											Desconto:
										</th>
										<td className="text-zinc-800 text-end text-sm font-semibold">
											{currencyFormat(30)}
										</td>
									</tr>
								</table>
								<div className="flex justify-between items-start">
									<strong className="text-lg text-zinc-800 font-bold">
										Total
									</strong>
									<div className="flex flex-col">
										<strong className="block text-end text-lg text-primary font-bold">
											{currencyFormat(219)}
										</strong>
										<span className="text-xs text-zinc-400">
											ou 10x de R$ 21,00 sem juros
										</span>
									</div>
								</div>
							</section>
						</div>
						<section className="hidden lg:block">
							<RelatedProducts length={4} />
						</section>
					</div>
					<section className="hidden lg:block w-full lg:w-3/12 bg-white p-6 rounded-md">
						<h2 className="text-sm mb-4 text-zinc-700 font-bold pb-4 border-b border-zinc-300">
							Resumo
						</h2>
						<table className="w-full mb-4">
							<tr>
								<th className="text-start text-sm text-zinc-400 font-semibold">
									Subtotal
								</th>
								<td className="text-end text-sm text-zinc-800 font-semibold">
									{currencyFormat(219)}
								</td>
							</tr>
							<tr>
								<th className="text-start text-sm text-zinc-400 font-semibold">
									Frete
								</th>
								<td className="text-end text-sm text-zinc-800 font-semibold">
									{currencyFormat(0)}
								</td>
							</tr>
							<tr>
								<th className="text-start text-sm text-zinc-400 font-semibold">
									Desconto
								</th>
								<td className="text-end text-sm text-zinc-800 font-semibold">
									{currencyFormat(30)}
								</td>
							</tr>
						</table>
						<div className="flex justify-between mb-4">
							<strong className="text-lg text-zinc-800 font-bold">Total</strong>
							<div className="flex flex-col">
								<strong className="text-lg text-primary font-bold block text-end">
									{currencyFormat(219)}
								</strong>
								<span className="text-xs text-end text-nowrap text-zinc-400">
									ou 10x de R$ 21,00 sem juros
								</span>
							</div>
						</div>
						<Button
							variant="tertiary"
							className="btn-block">
							Realizar Pagamento
						</Button>
					</section>
				</div>
			</div>
			<section className="p-6 bg-white rounded-sm lg:hidden">
				<div className="flex justify-between items-start mb-4">
					<strong className="text-lg text-zinc-800 font-bold">Total</strong>
					<div className="flex flex-col">
						<strong className="block text-end text-lg text-primary font-bold">
							{currencyFormat(219)}
						</strong>
						<span className="text-xs text-zinc-400">
							ou 10x de R$ 21,00 sem juros
						</span>
					</div>
				</div>
				<Button className="btn-block">Realizar Pagamento</Button>
			</section>
			<Footer />
		</main>
	)
}
