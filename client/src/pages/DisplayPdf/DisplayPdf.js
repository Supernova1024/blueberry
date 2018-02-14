import React from 'react';
import PDF from 'react-pdf-js';
import "./DisplayPdf.css"
import MyPDF from "./2017-1099-MISC.jpg"
import Input from "../../components/Input";


 
class DisplayPdf extends React.Component {

   
     

 
  render() {
    
    return (
    	<div className="jumbotron form">

   		 	<div className="company-name">
    		 <p> {"The Home Depot"} </p> 
    		 <p> {"142 Paces Ferry Rd"} </p>
    		 <p> {"Atlanta, GA 30039"}  </p> 
      
      		</div>
              <table>
              <tr>
      		<td className="vendor-name">
      		 Bill Jones 
      		 </td>
      		     <td className="amount"> 45,000.00 </td>
      		     </tr>
      		     </table>
      		

      </div>

       
        
      
  )
}
 }
export default  DisplayPdf;