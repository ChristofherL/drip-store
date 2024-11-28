import { Product } from "../product"

interface RelatedProductProps {
	length: number
}

export function RelatedProducts({ length }: RelatedProductProps) {
	return (
		<ul className="flex flex-wrap justify-between">
			{Array.from({ length }, (_, k) => k).map((k) => (
				<Product key={k} />
			))}
		</ul>
	)
}
