/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			"new-amsterdam": ['"New Amsterdam"', "sans-serif"],
			poppins: ["Poppins", "sans-serif"],
			matemasie: ['"Matemasie"', "normal"]
		},
		extend: {}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["nord"]
	}
};
