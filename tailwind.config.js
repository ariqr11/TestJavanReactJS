/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Public': ['Public Sans', 'sans-serif', defaultTheme.fontFamily.Public]
      }
    },
  },
  plugins: [],
}
