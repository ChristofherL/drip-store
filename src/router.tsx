import { createBrowserRouter } from "react-router-dom"
import { LoginForm } from "./components/login-form"
import { RegistrationForm } from "./components/registration-form"
import { MainLayout } from "./layouts/main-layout"
import { CartPage } from "./pages/cart"
import { CheckoutPage } from "./pages/checkout"
import { Home } from "./pages/home"
import { MyInformationsPage } from "./pages/my-informations"
import { OrdersPage } from "./pages/orders"
import { ProductDetailsPage } from "./pages/product-details"
import { ProductListPage } from "./pages/product-list"
import { SuccessPage } from "./pages/success"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <LoginForm />
			},
			{
				path: "sign-up",
				element: <RegistrationForm />
			}
		]
	},
	{
		path: "/home",
		element: <Home />
	},
	{
		path: "/products",
		element: <ProductListPage />
	},
	{
		path: "/detalhes-produto",
		element: <ProductDetailsPage />
	},
	{
		path: "/carrinho",
		element: <CartPage />
	},
	{
		path: "/meus-pedidos",
		element: <OrdersPage />
	},
	{
		path: "/minhas-informacoes",
		element: <MyInformationsPage />
	},
	{
		path: "/finalizar-compra",
		element: <CheckoutPage />
	},
	{
		path: "/compra-realizada",
		element: <SuccessPage />
	}
])
