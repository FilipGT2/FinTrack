/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html',],
  theme: {
    extend: {
      colors:{
        primary:{
          light: '#86dd12',
          dark: '#202d10',
        },
        secondary:{
          black: '#000000',
          white: '#ffffff',
        }
      },
    },
  },
  plugins: [],
}

