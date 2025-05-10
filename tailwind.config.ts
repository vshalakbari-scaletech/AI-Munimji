import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				primary: {
					main: '#6C5CE7',
					light: '#A29BFE',
					dark: '#5649C0',
				},
				secondary: {
					main: '#00B894',
					light: '#55EFC4',
					dark: '#00A884',
				},
				background: {
					default: '#FFFFFF',
					paper: '#F8F9FA',
					dark: '#2D3436',
				},
				text: {
					primary: '#2D3436',
					secondary: '#636E72',
					disabled: '#B2BEC3',
				},
				error: '#FF7675',
				warning: '#FFA502',
				success: '#00B894',
				grey: {
					50: '#F8F9FA',
					100: '#F1F3F5',
					200: '#E9ECEF',
					300: '#DEE2E6',
					400: '#CED4DA',
					500: '#ADB5BD',
					600: '#6C757D',
					700: '#495057',
					800: '#343A40',
					900: '#212529',
				},
			},
			fontFamily: {
				sans: ['Space Grotesk', 'Arial', 'sans-serif'], // Default sans font
				space: ['Space Grotesk', 'sans-serif'], // Specific utility class
				primary: ['Inter', 'sans-serif'],
				secondary: ['Poppins', 'sans-serif'],
			},
			boxShadow: {
				sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
				md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			},
			borderRadius: {
				sm: '0.125rem',
				md: '0.375rem',
				lg: '0.5rem',
				xl: '0.75rem',
			},
		}
	},
	plugins: []
} satisfies Config;

export default config;
