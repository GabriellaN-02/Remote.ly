/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
      },
      colors: {
        title: "#334e6f",
        description: "#707f8c",
        lightGray: "#78909C",
        address: "#8492af",
        btngreen: "#26ae61",
        grayBg: "#f8fafb",
        darkGray: "#424242",
        categories: "#5a6773",
        grayBorder: "#eaeff5",
        navLinks: "#6b797c",
      },
    },
  },
  plugins: [],
};