import React from "react";
import "./Button.css";
// Destructuring the type, className, children and onClick props, applying them to the button element
//<<<<<<< Updated upstream
const Button = ({ type = "primary", className, children }) => (
  <button id="form-button"
    
//=======
// const Button = ({ type = "primary", className, children, onClick, id }) => (
//   <button
//   	id={id}
//   	onClick={onClick}
// >>>>>>> Stashed changes
    className={["btn", `btn-${type} myBtn`, className].join(" ")}
  >
     {children}
  </button>
);

export default Button;

