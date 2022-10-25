/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        pink: '#FA96AA',
        darkPink: '#ff7591',
        lightPink: '#F7F0F2',
        lightGray: '#D9D9D9',
        transBlack: '#000000E6'
      }
    }
  },
  plugins: []
}
