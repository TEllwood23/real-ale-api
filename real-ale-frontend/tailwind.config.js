/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burgundy': '#800020',
        'white': '#ffffff',
      },
      backgroundImage: {
        'navbar-gradient': 'linear-gradient(to right, #800020, #000000)',
      }
    },
  },
  plugins: [],
};
