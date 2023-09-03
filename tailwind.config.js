/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas"],
      },
    },
    colors: {
      dark: "#0a0908",
      danger: "#FF0000",
      warning: "#FFFF00",
      success: "#008000	",
      info: "#00FFFF	",
      white: "#FFFFFF",
      cu: "#006d77",
      primary: "#808080	",
      cprimary: "#edf2f4",
      cushadow: "#25a18e",
      blue: "#3a86ff",
      gold: "#FFD700",
      img: "#00a6fb",
    },
  },
  variants: {},
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
};
