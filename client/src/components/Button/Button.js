import React from "react";
import "./Button.css";
// Destructuring the type, className, children and onClick props, applying them to the button element

const Button = ({ type = "success", className, children, onClick }) => (
  <button id="form-button"
  	onClick={onClick}

    className={["btn ", `btn-${type} `, className].join(" ")}
  >
     {children}
  </button>
);

export default Button;

