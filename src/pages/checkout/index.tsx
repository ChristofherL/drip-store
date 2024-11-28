import { Footer } from "../../components/footer"
import { HomeHeader } from "../../components/home-header"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { currencyFormat } from "../../utils/currencyFormat"

export function CheckoutPage() {
	return (
		<main>
			<HomeHeader />
			<div className="w-full flex justify-center  bg-[#F5F5F5] py-14">
				<section className="w-full lg:w-10/12 p-6">
					<h1 className="text-lg lg:text-4xl font-bold text-zinc-800 mb-6 lg:mb-10">
						Finalizar Compra
					</h1>
					<div className="w-full flex flex-col lg:flex-row gap-4 items-start">
						<form className="w-full lg:w-3/4 flex flex-col gap-4">
							<section className="p-6 bg-white rounded-md form-group">
								<h2 className="text-sm text-zinc-800 font-bold border-b border-zinc-300 pb-4 mb-4">
									Informações Pessoais
								</h2>
								<Input
									label="Nome Completo *"
									placeholder="Insira seu nome"
								/>
								<Input
									label="CPF *"
									placeholder="Insira seu CPF"
								/>
								<Input
									label="Email *"
									placeholder="Insira seu email"
								/>
								<Input
									label="Celular *"
									placeholder="Insira seu celular"
								/>
							</section>
							<section className="p-6 bg-white rounded-md form-group">
								<h2 className="text-sm text-zinc-800 font-bold border-b border-zinc-300 pb-4 mb-4">
									Informações de Entrega
								</h2>
								<Input
									label="Endereço *"
									placeholder="Insira seu endereço"
								/>
								<Input
									label="Bairro *"
									placeholder="Insira seu bairro"
								/>
								<Input
									label="Cidade *"
									placeholder="Insira sua cidade"
								/>
								<Input
									label="CEP *"
									placeholder="Insira seu CEP"
								/>
								<Input
									label="Complemento *"
									placeholder="Insira complemento"
								/>
							</section>
							<section className="p-6 bg-white rounded-md form-group">
								<h2 className="text-sm text-zinc-800 font-bold border-b border-zinc-300 pb-4 mb-4">
									Informações de Pagamento
								</h2>
								<Input
									label="Nome do Cartão *"
									placeholder="Insira o nome do cartão"
								/>
								<div className="w-full flex gap-4 flex-wrap">
									<Input
										label="Número do Cartão *"
										placeholder="Insira o número do cartão"
									/>
									<Input
										label="Data de validade do Cartão *"
										placeholder="Insira a data de validade do cartão"
									/>
									<Input
										label="CVV *"
										placeholder="cvv"
									/>
								</div>
							</section>
							<section className="p-6 bg-white rounded-md hidden lg:block">
								<h2 className="text-sm text-zinc-800 font-bold border-b border-zinc-300 pb-4 mb-4">
									Finalizar Compra
								</h2>
								<div className="flex justify-between items-start mb-4">
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
								<button
									className="btn btn-warning btn-block btn-lg"
									type="button">
									Realizar Pagamento
								</button>
							</section>
						</form>
						<section className="w-full lg:w-3/12 bg-white p-6 rounded-md">
							<h2 className="text-sm lg:text-2xl text-zinc-700 font-bold pb-4 border-b border-zinc-300">
								Resumo
							</h2>
							<div className="flex gap-4 pb-4 my-4 border-b border-zinc-300">
								<div className="bg-indigo-100 rounded-md p-4">
									<img
										className="w-[50px] h-[25px]"
										src="assets/tennis-slider.png"
										alt=""
									/>
								</div>
								<strong className="text-sm">
									Tênis Nike Revolution 6 Next Nature Masculino
								</strong>
							</div>
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
							<div className="flex justify-between p-4 lg:p-6 bg-amber-50 border border-amber-100 rounded-md mb-4">
								<strong className="text-lg lg:text-2xl text-zinc-800 font-bold">
									Total
								</strong>
								<div className="flex flex-col">
									<strong className="text-lg lg:text-2xl text-zinc-800 font-bold block text-end">
										{currencyFormat(219)}
									</strong>
									<span className="text-xs text-end text-nowrap text-zinc-400">
										ou 10x de R$ 21,00 sem juros
									</span>
								</div>
							</div>
							<button
								className="btn btn-warning btn-block lg:btn-lg btn-md"
								type="button">
								Realizar Pagamento
							</button>
						</section>
					</div>
				</section>
			</div>
			<section className="p-6 bg-white rounded-md lg:hidden">
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
				<Button
					variant="tertiary"
					className="btn-block">
					Realizar Pagamento
				</Button>
			</section>
			<Footer />
		</main>
	)
}
