/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: [
				'"Dangrek"',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			]
		},
		extend: {
			colors: {
				'text-light': '#474747',
				'text-dark': '#2b2b2b',
				// 'brand-dark': '#45828c',
				// 'brand-light': '#A7D4D8',
				'brand-dark': '#F6AE6C',
				'brand-light': '#fae2c5'
			}
		}
	},
	plugins: []
};
