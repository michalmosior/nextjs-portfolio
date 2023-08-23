/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				satoshi: ['Satoshi', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			height: {
				'70v': '70vh',
				'80v': '80vh',
				'90v': '90vh',
				'100v': '100vh',
			},
			animation: {
				'fade-right': 'fade-right 0.6s ease-in-out forwards',
				'fade-in': 'fade-in 1.2s ease-in-out forwards',
			},
			keyframes: {
				'fade-right': {
					from: {
						transform: 'translateX(-100%)',
						opacity: '0%',
					},

					to: {
						transform: 'translateX(0%)',
						opacity: '100%',
					},
				},
				'fade-in': {
					from: {
						opacity: '0%',
					},
					to: {
						opacity: '100%',
					},
				},
			},
		},
	},
	plugins: [],
};
