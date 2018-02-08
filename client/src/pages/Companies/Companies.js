import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import Radio_Button from "../../components/Radio_Button";
import Jumbotron from "../../components/Jumbotron";


class Companies extends Component {

state = {
	companyList:["Home Depot", "Target", "Walmart", "Publix", "Amazon", "Wendys"]
};

componentDidMount(){

}
	render(){
		return (
			<div>
				<h1>Companies</h1>
			<ul>
				{this.state.companyList.map(company => (
      			<li>{company}</li>
      			))}
      		</ul>
        		<button>One</button>
        		<button>Two</button>
        		<button>Three</button>
             </div>     	               	
			);
	}
}

export default Companies;
