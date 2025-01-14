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
        babyPink : "#f472b6",
        paintColor : "#c084fc",
        shieldColor : "#60a5fa"
      },
      keyframes: {
        topToDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        topToDown: 'topToDown 0.5s ease-out',
        fadeUpHeading : 'fade-up 0.5s ease-out',
        fadeUpSubheading : 'fade-up 0.4s ease-out',
        slideInLeft: 'slide-in-left 0.8s ease-out',
      },
    },
  },
  plugins: [],
}

