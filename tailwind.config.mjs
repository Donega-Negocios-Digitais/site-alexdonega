/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Cores do seu site
				background: '#0a0a0a',
				foreground: '#e5e5e5',
				card: {
					DEFAULT: '#1a1a1a',
					hover: '#222222',
				},
				accent: {
					DEFAULT: '#d87757',
					hover: '#e8866a',
					light: 'rgba(216, 119, 87, 0.1)',
				},
				muted: {
					DEFAULT: '#9ca3af',
					foreground: '#d1d5db',
				},
				border: '#2a2a2a',
				// Cores shadcn/ui padrão
				primary: {
					DEFAULT: '#d87757',
					foreground: '#0a0a0a',
				},
				secondary: {
					DEFAULT: '#111111',
					foreground: '#e5e5e5',
				},
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#ffffff',
				},
				ring: '#d87757',
			},
			fontFamily: {
				sans: ['Geist', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
			},
			borderRadius: {
				lg: '16px',
				md: '12px',
				sm: '8px',
			},
			animation: {
				'shimmer': 'shimmer 3s infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			keyframes: {
				shimmer: {
					'100%': { left: '100%' },
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
