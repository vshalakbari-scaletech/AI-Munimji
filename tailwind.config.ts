import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#25ADD0',
				secondary: '#17161A',
				background: '#F4F7FE',
				foreground: '#FFFFFF',
				neutral: '#F1F2F4',
				accent: '#e95050',
				success: '#01B574',

				light: '#E3F1F4',
				lighter: '#A3AED0'
			},
			fontFamily: {
				sans: ['Space Grotesk', 'Arial', 'sans-serif'], // Default sans font
				space: ['Space Grotesk', 'sans-serif'] // Specific utility class
			}
		}
	},
	plugins: []
} satisfies Config;
