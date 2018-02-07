import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import Radio_Button from "../../components/Radio_Button";
import Jumbotron from "../../components/Jumbotron";


class Companies extends Components {

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

}


	render(){
		return (

			<Container fluid>
				<Row>
					<Col size="md-6">
						<Jumbotron>
							<h1> New Companies</h1>
							
                  		</Jumbotron>  
                	</Col>
				</Row>
			</Container>

			);
	}
}

export default Companies;
