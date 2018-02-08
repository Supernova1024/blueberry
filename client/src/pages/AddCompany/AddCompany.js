import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import Radio_Button from "../../components/Radio_Button";
import Jumbotron from "../../components/Jumbotron";
import Input from "../../components/Input";

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
	this.setState

}

 handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

	render(){
		return (

				<div>
					<h3> Add New Company </h3>
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
       						placeholder="Title (required)"
						/>
											
					</form>

          		</div>  
                	

			);
	}
}

export default AddCompany;
