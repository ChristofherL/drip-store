import { Outlet } from "react-router-dom"
import { Footer } from "../../components/footer"
import { HomeHeader } from "../../components/home-header"

export function HomeLayout() {
	return (
		<main>
			<HomeHeader />
			<Outlet />
			<Footer />
		</main>
	)
}
