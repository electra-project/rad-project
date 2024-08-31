const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        // primary: "#15803D",
        // secondary: "#4ADE80",
        primary: "#ff1e00",
        secondary: "#e8f9fd",
        alert: "#59ce8f",
        blueblack: "#2d545e",
        lightgray: "#efefef",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
