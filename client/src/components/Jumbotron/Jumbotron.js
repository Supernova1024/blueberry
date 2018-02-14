import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{
      clear: "both",
      backgroundColor: "#E5E5E5E5",
      fontFamily: "Alegreya"

    }}
    className="jumbotron"
    id="main"
  >
    {children}
  </div>
);

export default Jumbotron;