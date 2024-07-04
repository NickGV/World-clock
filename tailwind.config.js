/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': 'rgb(0, 1, 27)',
      },
      height: {
        '90': '90%',
      }
    },
  },
  plugins: [],
}