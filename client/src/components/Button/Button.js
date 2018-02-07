import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = ({ type = "default", className, children }) => (
  <button
    
    className={["btn", `btn-${type}`, className].join(" ")}
  >
    {children}
  </button>
);

export default Button;