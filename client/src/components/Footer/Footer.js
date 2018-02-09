import React from "react";
import "./Footer.css";


var style = {
    backgroundColor: "#312581",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                
            </div>
        </div>
    )
}

//export default Footer




// const Footer = ({topText, bottomText}) => (
//   <footer className="footer"
    
//     style={{
//       background: '#312581',
//       color: 'white',
//       fontFamily: 'Helvetica',
//       textAlign: 'center'

//     }}
//   >
//     <div className="container-fluid">
//   	<span style={{ fontWeight: 'bold' }}>
//     	{topText}
//     </span>
//     <br />
//     {bottomText}
//     </div>
//   </footer>
// );

export default Footer;