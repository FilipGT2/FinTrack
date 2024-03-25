/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html',],
  theme: {
    extend: {
      colors:{
        primary:{
          roseRed: '#c13c52',
          darkBlue: '#03214a',
        },
        secondary:{
          black: '#000000',
          white: '#ffffff',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

