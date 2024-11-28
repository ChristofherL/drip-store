import { ChevronLeft, ChevronRight } from "lucide-react"
import { type ReactNode, useState } from "react"

interface SliderProps {
	totalItems: number
	render: () => ReactNode
	customControls?: ({
		currentIdx,
		onChangeItem
	}: { currentIdx: number; onChangeItem: (idx: number) => void }) => ReactNode
}

export function Slider({ totalItems, render, customControls }: SliderProps) {
	const [currentIdx, setCurrentIdx] = useState(0)

	function onChangeItem(idx: number) {
		setCurrentIdx(idx)
	}

	return (
		<div className="w-full flex flex-col gap-4">
			<div className="h-[270px] lg:h-[570px] overflow-hidden relative">
				<ChevronLeft
					size={44}
					className="absolute top-2/4 z-50 cursor-pointer"
					onClick={() => setCurrentIdx((state) => Math.max(0, state - 1))}
				/>
				<ChevronRight
					size={44}
					className="absolute top-2/4 right-0 z-50 cursor-pointer"
					onClick={() =>
						setCurrentIdx((state) => Math.min(totalItems - 1, state + 1))
					}
				/>
				<ul
					className="flex w-full h-full relative transition-all ease-out duration-700"
					style={{
						left: `calc(${currentIdx} * -100%)`
					}}>
					{render()}
				</ul>
			</div>
			{/* biome-ignore lint/complexity/useOptionalChain: <explanation> */}
			{customControls && customControls({ currentIdx, onChangeItem })}
		</div>
	)
}
