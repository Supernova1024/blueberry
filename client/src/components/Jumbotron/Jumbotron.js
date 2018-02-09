import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{  clear: 'both', backgroundColor:  '#312581' }} className="jumbotron" id="main">
    {children}
  </div>;

export default Jumbotron;