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
	console.log(this.state.companies)
};


	render(){
		return (

			<div>
				<Row>
					<Col size="md-3">
					</Col>
					<Col size="md-6">
						<div style={{ textAlign: 'center' }}>
							<div className=" jumbotron mytable">
							<h3>Companies</h3>
							<table className="table table-striped">
							<thead>
          						<tr className="myRow">
            					<th>
              					Name
           					 	</th>
           					 	</tr>
           					 	</thead>
           					 	<tbody>
           					 {this.state.companies.map(company => (
           					<tr className="myRow">
            				<td className="td-width">
            					{company.companyName}
            				</td>
            				<td className="myRowTd">
            					<Button> Edit </Button>
  								<Link to={"/companies/" + company._id}/>
  							</td>
  							<td className="myRowTd">
  								<Button> Vendors </Button>
      							<Link/>
      						</td>
      						</tr>
      						))}
           					 </tbody>
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
                          </table>
						</div>
						</div>
					</Col>
					<Col size="md-3">

				   	</Col>
		         </Row>
			
        		
        		
             </div>     	               	

			);
	}
}

export default Companies;
