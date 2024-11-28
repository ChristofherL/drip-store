import { Footer } from "../../components/footer"
import { HomeHeader } from "../../components/home-header"
import { Button } from "../../components/ui/button"
import { currencyFormat } from "../../utils/currencyFormat"

export function SuccessPage() {
	return (
		<main>
			<HomeHeader />
			<div className="w-full flex justify-center bg-[#F5F5F5]">
				<div className="lg:w-3/5 lg:py-14 pt-20 pb-14  px-6 lg:px-0">
					<section className="w-full bg-white rounded-md p-6 mb-4">
						<h1 className="text-2xl lg:text-3xl font-bold text-zinc-800 text-center mb-6">
							Compra realizada com sucesso!
						</h1>
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
						<ul className="flex flex-col gap-1 py-4 border-t border-zinc-300">
							<strong className="text-start text-zinc-800 font-semibold lg:text-sm mb-2">
								Informações de Entrega
							</strong>
							<li className="flex gap-3">
								<span className="text-sm text-zinc-400 font-semibold text-start">
									Endereço:
								</span>
								<strong className="text-sm text-zinc-800 font-semibold">
									Ruaa João Pessoa, 333
								</strong>
							</li>
							<li className="flex gap-3">
								<span className="text-sm text-zinc-400 font-semibold text-start">
									Bairro:
								</span>
								<strong className="text-sm text-zinc-800 font-semibold">
									Centro
								</strong>
							</li>
							<li className="flex gap-3">
								<span className="text-sm text-zinc-400 font-semibold text-start">
									Cidade:
								</span>
								<strong className="text-sm text-zinc-800 font-semibold">
									Fortaleza, Ceará
								</strong>
							</li>
							<li className="flex gap-3">
								<th className="text-sm text-zinc-400 font-semibold text-start">
									CEP:
								</th>
								<td className="text-sm text-zinc-800 font-semibold">
									433-8800
								</td>
							</li>
						</ul>
						<ul className="flex flex-col gap-1 py-4 border-t border-zinc-300">
							<strong className="text-start text-zinc-800 font-semibold lg:text-sm mb-2">
								Informações da Pagamento
							</strong>
							<li className="flex gap-3">
								<span className="text-sm text-zinc-400 font-semibold text-start">
									Titula do cartão:
								</span>
								<strong className="text-sm text-zinc-800 font-semibold">
									Christofher Lucas
								</strong>
							</li>
							<li className="flex gap-3">
								<span className="text-sm text-zinc-400 font-semibold text-start">
									Final:
								</span>
								<strong className="text-sm text-zinc-800 font-semibold">
									************2020
								</strong>
							</li>
						</ul>
						<h2 className="text-start text-zinc-800 font-semibold lg:text-sm mb-2 border-t border-zinc-300 pt-4 ">
							Resumo da compra
						</h2>
						<div className="flex gap-4 my-4">
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
						<span className="text-zinc-800 underline block text-center">
							Imprimir Recibo
						</span>
					</section>
					<Button
						variant="tertiary"
						className="btn-block">
						Voltar para Home
					</Button>
				</div>
			</div>
			<Footer />
		</main>
	)
}
