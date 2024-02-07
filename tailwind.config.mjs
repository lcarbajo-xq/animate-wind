import animateWind from '../src/index.js'
import theme from '../src/theme'

const { animation } = theme

const safelist = Object.keys(animation).map((key) => `animate-${key}`)

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {}
  },
  safelist,
  plugins: [animateWind]
}
