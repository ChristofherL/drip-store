import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function RegistrationForm() {
	return (
		<form className="bg-white rounded-md p-6 form-group lg:w-[580px]">
			<div className="flex flex-col items-center mb-5 lg:items-start">
				<h1 className="text-lg font-bold text-gray-800 md:text-3xl lg:mb-6">
					Crie sua conta
				</h1>
				<p className="text-sm text-gray-600 lg:text-base">
					Ja possui uma conta? Entre{" "}
					<Link
						to="/"
						className="underline">
						aqui
					</Link>
				</p>
			</div>
			<Input
				label="Email"
				placeholder="Insira um email"
			/>
			<Link to="/home">
				<Button>Criar conta</Button>
			</Link>
			<span>Ou faça login com</span>
		</form>
	)
}
