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
				<Row>
					<Col size="md-3">
					</Col>
					<Col size="md-6">
						<div style={{ textAlign: 'center' }}>
							<h3>Companies</h3>
						</div>
					</Col>
					<Col size="md-3">
						<Link to="/AddCompany">
						<button 
				        	a href="/AddCompany"
				            type="success"
				            className="input-lg btn btn-success"
				            //onClick={() => {
				             // alert('Get Ready To Add A New Company!');
				                
				           // }}
				         >
				            Add Company 
				         </button>
                          </Link>

				   	</Col>
		         </Row>
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
