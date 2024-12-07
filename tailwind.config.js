/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundColor: {},
			colors: {
				primary: '#002855',
			},
			spacing: {},
			fontSize: {},
			zIndex: {},
			boxShadow: {},
			transitionDuration: {},
			borderRadius: {},
		},
	},
	plugins: [],
};
