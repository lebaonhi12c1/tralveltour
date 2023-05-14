/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EA9A23',
        'secondary':'#0F09A1',
        'three': '#000',
        'hero': '#ea9a23',
      },
      boxShadow: {
        'primary': '10px 10px 0 rgba(0, 0, 0)',
      }
    },
  },
  plugins: [],
}