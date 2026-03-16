/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ['Cinzel', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['Playfair Display', 'serif'],
      },
      colors: {
        'gold': {
          400: '#D4AF37',
          500: '#C5A028',
          600: '#B08D1F',
        },
        'midnight': {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a25',
        },
        'navy': {
          900: '#0a1628',
          800: '#0f1d33',
          700: '#152642',
        },
        'ice': '#f0f4f8',
      }
    },
  },
  plugins: [],
}