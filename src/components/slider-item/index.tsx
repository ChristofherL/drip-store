interface SliderItemProps {
	color: string
	itemImagePath: string
}

export function SliderItem({ color, itemImagePath }: SliderItemProps) {
	return (
		<li
			className={`min-w-full min-h-full ${color} rounded-md flex items-center justify-center`}>
			<img
				className="lg:w-[500px] lg:h-[250px] w-[240px] h-[120px]"
				src={itemImagePath}
				alt=""
			/>
			
		</li>
	)
}
