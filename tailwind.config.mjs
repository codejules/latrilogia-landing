/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'nav': '#918086',
				'button': '#cfb49b'
			},
			backgroundImage: {
				'hero-pattern': "url('src/assets/img/bg_latrilogia.webp')",
				'hero-contact': "url('src/assets/img/bg-contacto.webp')",
			},
			fontFamily: {
				'vidaloka': ['"Vidaloka"'],
			  },
		},
	},
	plugins: [require('flowbite/plugin')
	],
}
