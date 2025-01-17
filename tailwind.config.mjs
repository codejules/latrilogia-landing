/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'nav': '#918086',
			},
			backgroundImage: {
				'hero-pattern': "url('src/assets/img/bg_latrilogia.webp')",
			}
		},
	},
	plugins: [require('flowbite/plugin')
	],
}
