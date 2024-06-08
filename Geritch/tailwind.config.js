/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Open': ['Open Sans', 'sans-serif',],
      'Cormo': ['Cormorant Upright', 'serif',],
    },
    extend: {},
  },
  plugins: [],
}