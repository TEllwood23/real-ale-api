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
        'neon': '#a2c92a',
        'green': '#606c38'
      },
      backgroundImage: {
        'backgroundColor': 'linear-gradient(to bottom, #800020, #731e1e)',
      }
    },
  },
  plugins: [],
};
