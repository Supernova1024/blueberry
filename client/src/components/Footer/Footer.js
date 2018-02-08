import React from "react";
import "./Footer.css";

const Footer = ({topText, bottomText}) => (
  <footer className="footer"
    
    style={{
      background: '#4F86F7',
      color: 'white',
      fontFamily: 'Helvetica',
      textAlign: 'center'

    }}
  >
    <div className="container-fluid">
  	<span style={{ fontWeight: 'bold' }}>
    	{topText}
    </span>
    <br />
    {bottomText}
    </div>
  </footer>
);

export default Footer;