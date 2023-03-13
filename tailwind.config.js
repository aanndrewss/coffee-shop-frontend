/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-var-requires */

const twColors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

const colors = {
	transparent: twColors.transparent,
	black: twColors.black,
	white: twColors.white,
	primary: '#01AA13',
	bgColor: '#FAF9FC',
	errorColor: '#FD4646',
	primaryText: '#3B3A3B',
	secondaryText: '#A2A1A3'
}

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors,
		extend: {
			fontFamily: {
				urbanist: ['var(--urbanist-font)', ...fontFamily.sans]
			},
			borderRadius: {
				layout: '15px'
			},

			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			}
		}
	},
	plugins: []
}
