/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          moss: '#4A5D4F',
          sage: '#8FA396',
          sand: '#F2EFEC',
          clay: '#C08B76',
          stone: '#1C1917',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        texture: "url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')",
      },
      boxShadow: {
        soft: '0 20px 40px -15px rgba(74, 93, 79, 0.1)',
      },
    },
  },
  plugins: [],
};