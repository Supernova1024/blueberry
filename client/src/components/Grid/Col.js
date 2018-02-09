import React from "react";

//<div className="col-md-3">
//<Col size="md-9">
//<div className="col-md-9">

export const Col = ({ size, children }) =>
  <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>;