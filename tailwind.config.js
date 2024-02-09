const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lang/*.json',
  ],
  theme: {
    container: {
      center: true,
      padding: defaultTheme.spacing['3'],
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#E4007E',
        secondary: '#050774',
        'secondary-light': '#0A84FF',
        muted: '#81817E',
        default: '#4D4D4D',
        success: colors.green['600'],
        error: colors.red['600'],
        warning: colors.yellow['600'],
        info: colors.blue['600'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addBase, theme }) => {
      addBase({
        html: { color: theme('colors.default') },
      })
    }),
  ],
}
