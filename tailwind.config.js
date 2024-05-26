/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./components/Utils/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--ff-head)'],
				body: ['var(--ff-para)'],
				head: ['var(--ff-head)'],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
