/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: {
          50: '#fff8e1',
          100: '#ffedc2',
          200: '#ffdd85',
          300: '#ffc847',
          400: '#ffb31a', // Amber/Goldish
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        dark: '#1e293b',
      }
    },
  },
  plugins: [],
}