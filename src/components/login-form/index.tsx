import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function LoginForm() {
	return (
		<form className="bg-white rounded-md p-6 form-group lg:w-[580px]">
			<div className="flex flex-col items-center mb-5 lg:items-start">
				<h1 className="text-lg font-bold text-gray-800 md:text-3xl lg:mb-6">
					Acesse sua conta
				</h1>
				<p className="text-sm text-gray-600 lg:text-base">
					Novo cliente? Então registre-se{" "}
					<Link
						to="sign-up"
						className="underline">
						aqui
					</Link>
				</p>
			</div>

			<Input
				label="Login"
				placeholder="Insira seu login ou email"
			/>
			<Input
				label="Senha"
				placeholder="Insira sua senha"
			/>
			<Link
				to="/"
				className="text-sm text-gray-600 underline mb-3">
				Esqueci minha senha
			</Link>
			<Link to="/home">
				<Button type="submit">Acessar Conta</Button>
			</Link>
			<span className="text-sm text-gray-600 text-center lg:text-base">
				Ou faça login com
			</span>
		</form>
	)
}
