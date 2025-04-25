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
				'hero-contact': "url('https://cdn-images.restaurantelatrilogia.es/bg-contacto.webp')",
				'hero-footer': "url('https://cdn-images.restaurantelatrilogia.es/bg-footer.webp')",
			},
			fontFamily: {
				'vidaloka': ['"Vidaloka"'],
			  },
		},
	},
	plugins: [require('flowbite/plugin')
	],
}
