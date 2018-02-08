import React from "react";
import "./Button.css";
// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = ({ type = "primary", className, children }) => (
  <button id="form-button"
    
    className={["btn", `btn-${type} myBtn`, className].join(" ")}
  >
    {children}
  </button>
);

export default Button;