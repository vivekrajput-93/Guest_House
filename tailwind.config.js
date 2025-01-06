/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinky: '#e82574', // Add a custom name for the color
      },
    },
  },
  plugins: [],
}

