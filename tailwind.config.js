/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lakshya-blue': '#0a192f', // Deep Blue - Trust, Corporate
        'lakshya-gold': '#d4af37', // Gold - Premium, Excellence
        'lakshya-dark': '#0f172a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
