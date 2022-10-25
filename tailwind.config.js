/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        darkOrange: '#9e7538',
        orange: '#F1B356',
        lightGray: '#CCC4BC',
        darkBrown: '#211E1B',
        lightBrown: '#2E2925'
      }
    }
  },
  plugins: []
}
