import React from 'react';
import Image from "./C2QB_green_btn_lg_default.png"



class QBO extends React.Component {
  constructor(props){
    super(props);
    
    	window.intuit.ipp.anywhere.setup({
      grantUrl: 'http://localhost:3000/companies',
      datasources: {
        quickbooks : true,
        payments : true
      },
      paymentOptions:{
        intuitReferred : true
      }
    })
    
  }
  componentDidMount() {
        let buttonContainer = document.getElementById("intuButton")
		const connectToIntuit = document.createElement('ipp:connectToIntuit');
		buttonContainer.appendChild(connectToIntuit);
  }
  render(){
      return (
          <div id="intuButton" className=".jumbotron">
          <img id="qb-img" src={Image} />
          </div>
      )
  }
}

export default QBO;
