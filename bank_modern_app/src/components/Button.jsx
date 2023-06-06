import React from "react";

/*
bg-blue-gradient => customized class to show background with a gradient, check index.css

props => styles
*/
const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;