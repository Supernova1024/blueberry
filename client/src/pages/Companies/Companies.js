import API from "../../utils/API";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button";
//import Radio_Button from "../../components/Radio_Button";
import Jumbotron from "../../components/Jumbotron";
import "./Companies.css";



class Companies extends Component {


state = {
	//companyList:["Home Depot", "Target", "Walmart", "Publix", "Amazon", "Wendys"]
	companies: []
};

componentDidMount(){
	this.loadCompanies();

}

loadCompanies = () => {
	API.getCompanies()
	.then(res =>
		this.setState({ companies: res.data})
		)
	.catch(err => console.log(err));
};


	render(){
		return (

			<div>
				<h3>Companies</h3>
			<ul>
				{this.state.companies.map(company => (
      			<li>
      				
					<div className="li-text">
						{company.companyName} 
					</div>
      					
      				
      			<div id="myButtons">
      				<Button> Edit </Button>
      				<Button> Vendors </Button>
      			</div>
      			</li>
      			))}
      		</ul>
        		
        		
             </div>     	               	

			);
	}
}

export default Companies;
