/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateOrbital: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(60deg)' },
        },
        botAnimate:{
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '100%': { transform: 'scale(1.2) rotate(-5deg)' },
        },
        slideBg: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        rotateOrbital: 'rotateOrbital 30s linear infinite',
        botAnimate: 'botAnimate 2s ease-in-out infinite alternate',
        slideBg: 'slideBg 8s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}

