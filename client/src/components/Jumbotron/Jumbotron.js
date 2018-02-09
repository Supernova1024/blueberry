import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{  clear: 'both', backgroundColor:  '#b9b9b9' }} className="jumbotron" id="main">
    {children}
  </div>;

export default Jumbotron;