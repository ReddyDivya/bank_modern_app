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
      xs:"480px",//extra small, width of 480px or smaller
      ss:"620px",//small, width of 620px or smaller
      sm: "768px",//small/medium, width of 768px or smaller
      md: "1060px",//medium, width of 1060px or smaller
      lg: "1200px",//large, width of 1200px or smaller
      xl: "1700px",//extra large, width of 1700px or smaller
    },//screens
  },//theme

  //plugins property allows us to include additional plugins if you want to enhance Tailwind CSS with extra features or utilities.
  plugins: [],
}/*exports*/