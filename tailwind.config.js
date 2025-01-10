/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        backgroundMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        },
      },
      animation: {
        backgroundMove: 'backgroundMove 10s linear infinite',
      },
    },
  },
  plugins: [],
};