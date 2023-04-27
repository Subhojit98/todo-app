/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {      fontFamily: {
        Dosis: "'Dosis', sans-serif;",
        Franklin: "'Libre Franklin', sans-serif;",
        Manrope: "'Manrope', sans-serif;",
        Nunito: "'Nunito', sans-serif;",
        Open: "'Open Sans', sans-serif;",
        Oxygen: "'Oxygen', sans-serif;",
        Poppins: "'Poppins', sans-serif;",
        Raleway: "'Raleway', sans-serif;",
        Roboto: "'Roboto', sans-serif;",
        Rubik: "'Rubik', sans-serif;",
        Neon: "'Tilt Neon', cursive;",
      },},
  },
  plugins: [],
}

