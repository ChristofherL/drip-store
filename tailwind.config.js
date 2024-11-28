/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {}
	},
	plugins: [
		require("rippleui")({
			removeThemes: ["dark"],
			themes: [
				{
					themeName: "light",
					colorScheme: "light",
					colors: {
						primary: "#C92071",
						secondary: "#B5B6F2",
						error: "#EE4266",
						success: "#52CA76",
						warning: "#F6AA1C"
					}
				},
				{
					themeName: "custom",
					colorScheme: "dark" | "light",
					colors: {
						tertiary: "#991956"
					}
				}
			]
		})
	]
}
