import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import Radio_Button from "../../components/Radio_Button";
import Jumbotron from "../../components/Jumbotron";
import Input from "../../components/Input";
import Button from "../../components/Button";
//import "./AddCompany.css";
import API from "../../utils/API";
  


class AddVendor extends Component {

state = {
	Vendors: [],
	tin: "",
	firstName: "",
	lastName: "",
	address: "",
	city: "",
	state: "",
	zip: "",
	phone: "",
	email: ""
};

componentDidMount(){
	this.clearForm();
}



 handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


clearForm = () => {
	this.setState({
	Vendors: [],
	tin: "",
	firstName: "",
	lastName: "",
	address: "",
	city: "",
	state: "",
	zip: "",
	phone: "",
	email: ""
	}) 
};

  handleFormSubmit = event => {
    event.preventDefault();
    
      API.saveVendor({
		    tin: this.state.tin,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			address: this.state.address,
			city: this.state.city,
			state: this.state.state,
			zip: this.state.zip,
			phone: this.state.phone,
			email: this.state.email
      })
        .then(res => this.clearForm())
        .catch(err => console.log(err));
    
  };



	render(){
		return (

				<div>
					<h3  id="add-company-title" className ="text-center"> New Vendor Entry </h3>
					<form className="form">
						<Input
							value={this.state.tin}
       						onChange={this.handleInputChange}
       						name="tin"
       						placeholder="EIN or SSN (required)"
						/>
						<Input
							value={this.state.firstName}
       						onChange={this.handleInputChange}
       						name="firstName"
       						placeholder="First Name (required)"
						/>
						<Input
							value={this.state.lastName}
       						onChange={this.handleInputChange}
       						name="lastName"
       						placeholder="Last Name (required)"
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
							value={this.state.phone}
       						onChange={this.handleInputChange}
       						name="phone"
       						placeholder="Phone# (required)"
						/>
						<Input
							value={this.state.email}
       						onChange={this.handleInputChange}
       						name="email"
       						placeholder="Email (required)"
						/>
						<div className="text-center">
							<Button
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

export default AddVendor;
