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
        'backgroundColor': 'linear-gradient(to bottom, #5a1d1d, #731e1e)',
      }
    },
  },
  plugins: [],
};
