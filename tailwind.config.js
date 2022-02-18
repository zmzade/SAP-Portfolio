const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        lightBlue: "#304ffe",
        amber: colors.amber,
      },
      textShadow: {
        default: "0 2px 0 #000",
        md: "0 2px 2px #000",
        p: "0 0 3px #FF0000, 0 0 5px #0000FF",
        h1: "0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
