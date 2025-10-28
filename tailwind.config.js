/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'burg-dark': '#0f0f0f',
        'burg-red': '#ff2a6d',
        'burg-gold': '#ffd700',
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
