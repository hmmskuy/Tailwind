/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "abudzar": "bergerak 1s ease-in-out infinite"
      },
      keyframes:{
        bergerak: {
          "0%, - 100%":{ transform: "rotate(3deg"},
          "50%": {trasform: "rotate(-3deg)"},
        },
      },
      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        inter: ["inter"],
      },
      fontSize: {
        pondok: ["7rem"],
      },
    },
  },
  plugins: [],
};
