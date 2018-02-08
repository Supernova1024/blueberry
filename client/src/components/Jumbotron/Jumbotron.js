import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{  clear: 'both', backgroundColor:  '#4F86F7' }} className="jumbotron" id="main">
    {children}
  </div>;

export default Jumbotron;