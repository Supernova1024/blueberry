import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Input from "../../components/Input";
import Radio_Button from "../../components/Radio_Button";
import Jumbotron from "../../components/Jumbotron";


class Companies extends Components {

state = {
	companyList:["Home Depot", "Target", "Walmart", "Publix", "Amazon", "Wendys"]
};

componentDidMount(){

}


	render(){
		return (

			<Container fluid>
				<Row>
					<Col size="md-6">
						<Jumbotron>
							<h1>Companies</h1>
							<ul>
							{this.state.companyList.map(company => (
                  			<li><RadioButton/>{company}</li>
                  			))}
                  			</ul>
                    		<button>One</button>
                    		<button>Two</button>
                    		<button>Three</button>
                  		</Jumbotron>  
                	</Col>
				</Row>
			</Container>

			);
	}
}

export default Companies;
