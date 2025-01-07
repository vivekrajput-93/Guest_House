/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinky: '#e82574',
        buttonPinky : "#bc1c5c",
      },
      keyframes: {
        topToDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        topToDown: 'topToDown 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

