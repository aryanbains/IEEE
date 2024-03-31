/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],
  theme: {
    fontFamily: {
      display: ["Satisfy", "cursive"],
      // final: ["Audiowide","sans-serif"],
      final: ["Stacker", "sans-serif"],
      instrument: ['ubuntu mono', "sans-serif"],
    },
    extend: {
      animation: {
        blob: "blob 4s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(80px, -100px) scale(1.12)",
          },
          "66%": {
            transform: "translate(-50px, 50px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      
      extend: {
        screens: {
          'lg': '1250px',
          // => @media (min-width: 992px) { ... }
          'tablet': [
            {'min': '400px', 'max': '990px'},
          ]
        },

      },
      plugins: [
        require('flowbite/plugin')
      ],
    },
  },
}