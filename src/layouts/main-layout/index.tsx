import { Outlet } from "react-router-dom"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"

export function MainLayout() {
	return (
		<>
			<Header />
			<div className="lg:w-full bg-gradient-to-b from-[#B5B6F2] from-15% via-[#B5B6F2] to-white to-100% p-6 lg:h-[92dvh] lg:flex lg:justify-center">
				<div className="lg:w-3/5 lg:flex lg:justify-between lg:items-start relative lg:mt-28">
					<Outlet />
					<img
						className="w-96 absolute right-28 -top-12"
						src="assets/shoe-right.png"
						alt=""
					/>
					<img
						className="w-96 absolute -right-36 top-40"
						src="assets/shoe-left.png"
						alt=""
					/>
				</div>
			</div>
			<Footer />
		</>
	)
}
