import React from 'react';
import PDF from 'react-pdf-js';
import "./DisplayPdf.css"
import MyPDF from "./2017-1099-MISC.jpg"


 
class DisplayPdf extends React.Component {

   
     

 
  render() {
    
    return (
      <img id = "pdf" src={MyPDF}/>
       
        
      
  )
}
 }
export default  DisplayPdf;