import React from 'react';



class QBO extends React.Component {
  constructor(props){
    super(props);
    
    	window.intuit.ipp.anywhere.setup({
      grantUrl: 'http://localhost:3000/RequestToken',
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
          <div id="intuButton"></div>
      )
  }
}

export default QBO;
