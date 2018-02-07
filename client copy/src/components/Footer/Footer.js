import React from "react";

const Footer = ({topText, bottomText}) => (
  <footer
    style={{
      color: 'gray',
      fontFamily: 'Helvetica',
      textAlign: 'center',
    }}
  >
  	<span style={{ fontWeight: 'bold' }}>
    	{topText}
    </span>
    <br />
    {bottomText}
  </footer>
);

export default Footer;