/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  
  //This property allows us to extend or customize the default theme.
  theme: {
    extend: {

      //This extension adds custom colors to the theme.
      colors:{
        primary: "#00040f",
        secondary:"#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },

      //This extension adds a custom font family named poppins to the theme.
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },

    /*
    screens property defines custom screen breakpoints for responsive design.
    breakpoints for various screen sizes, such as xs, ss, sm, md, lg, and xl, each with their respective width values
    */
    screens:{
      xs:"480px",
      ss:"620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },//screens
  },//theme

  //additional plugins if we want to use with Tailwind CSS.
  plugins: [],
}/*exports*/