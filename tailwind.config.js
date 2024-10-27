/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "secondary": "Poppins",
        "main": "Raleway",
        "terciary": "Old Standard TT"
      },
      colors: {
        "main": "#f6f7f9",
        "secondary": "#eff3f8",
      },
      screens: {
        "1280px": "1280px",
        "1290px": "1290px"
      }
    },
  },
  plugins: [],
}