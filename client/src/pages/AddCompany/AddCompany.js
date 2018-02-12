import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import Radio_Button from "../../components/Radio_Button";
import Jumbotron from "../../components/Jumbotron";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./AddCompany.css";
import API from "../../utils/API";
  


class AddCompany extends Component {

state = {
	Companies: [],
	tin: "",
	companyName: "",
	address: "",
	city: "",
	state: "",
	zip: "",
	contactName: "",
	contactPhone: "",
	contactEmail: "",
};

componentDidMount(){
	this.clearForm();
}

clearForm = () => {
	this.setState({
	Companies: [],
	tin: "",
	companyName: "",
	address: "",
	city: "",
	state: "",
	zip: "",
	contactName: "",
	contactPhone: "",
	contactEmail: ""
	})
};


 handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    if (
    	this.state.tin &&
    	this.state.companyName &&
    	this.state.address &&
    	this.state.city &&
    	this.state.state &&
    	this.state.zip &&
    	this.state.contactName &&
    	this.state.contactPhone &&
    	this.state.contactEmail
        ) {
      API.saveCompany({
		    tin: this.state.tin,
			companyName: this.state.companyName, 
			address: this.state.address,
			city: this.state.city,
			state: this.state.state,
			zip: this.state.zip,
			contactName: this.state.contactName,
			contactPhone: this.state.contactPhone,
			contactEmail: this.state.contactEmail,
      })
        .then(res => this.clearForm())
        .catch(err => console.log(err));
    }
  };



	render(){
		return (

				<div>
					
					<h3  id="add-company-title" className ="text-center"> New Company Entry </h3>
					<form class="form">
						<Input
							value={this.state.tin}
       						onChange={this.handleInputChange}
       						name="tin"
       						placeholder="Tin (required)"
						/>
						<Input
							value={this.state.companyName}
       						onChange={this.handleInputChange}
       						name="companyName"
       						placeholder="Company Name (required)"
						/>
						<Input
							value={this.state.address}
       						onChange={this.handleInputChange}
       						name="address"
       						placeholder="Address (required)"
						/>
						<Input
							value={this.state.city}
       						onChange={this.handleInputChange}
       						name="city"
       						placeholder="City (required)"
						/>
						<Input
							value={this.state.state}
       						onChange={this.handleInputChange}
       						name="state"
       						placeholder="State (required)"
						/>
						<Input
							value={this.state.zip}
       						onChange={this.handleInputChange}
       						name="zip"
       						placeholder="Zip (required)"
						/>
						<Input
							value={this.state.contactName}
       						onChange={this.handleInputChange}
       						name="contactName"
       						placeholder="Contact Name (required)"
						/>
						<Input
							value={this.state.contactPhone}
       						onChange={this.handleInputChange}
       						name="contactPhone"
       						placeholder="Phone# (required)"
						/>
						<Input
							value={this.state.contactEmail}
       						onChange={this.handleInputChange}
       						name="contactEmail"
       						placeholder="Email (required)"
						/>
						<div className="text-center">
							<Button
							// add disabled here
							onClick={this.handleFormSubmit}
							>
							 Submit 
							</Button>
						</div>   		
					</form>
				
          		</div>  
                	

			);
	}
}

export default AddCompany;
