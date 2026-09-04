/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#FAF5F0",
        champagne: "#E8D8C4",
        rosewood: "#8B5A5A",
        burgundy: "#4A2525",
        charcoal: "#2A2A2A",
        gold: "#C9A66B",
        glass: "rgba(255, 255, 255, 0.6)",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['"Montserrat"', "sans-serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(74, 37, 37, 0.1)',
      }
    },
  },
  plugins: [],
};