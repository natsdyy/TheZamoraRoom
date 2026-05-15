/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0a0906',
          cream: '#f5f0e8',
          gold: '#c8962a',
          dark: '#0d0b07',
          gray: '#8a8275',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        accent: ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
