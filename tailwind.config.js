/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#e3c315',
        secondary: '#001F3F',
        black: '#0000',
        white: '#FFFF',
      },
    },
  },
  plugins: [],
};
