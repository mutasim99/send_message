/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F3E9D2",
        rose: "#D98A82",
        teal: "#6E9A96",
        mustard: "#D9A441",
        ink: "#3B2A2A",
        lavender: "#B9A6C9",
        wax: "#7A2E2E",
      },
      fontFamily: {
        hand: ['"Permanent Marker"', "cursive"],
        type: ['"Courier Prime"', "monospace"],
      },
    },
  },
  plugins: [],
};
