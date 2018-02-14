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

	componentDidMount() {
		this.loadCompanies();
	}

	loadCompanies = () => {
		API.getCompanies()
			.then(res => this.setState({ companies: res.data }))
			.catch(err => console.log(err));
		console.log(this.state.companies);
	};

	render() {
		return (
			<div>
				<Row>
					<Col size="md-3" />
					<Col size="md-12">
						<div style={{ textAlign: "center" }}>
							<div className=" jumbotron mytable">
								<h3>Companies</h3>

								<table className="table table-striped">
									<thead>
										<tr className="myRow">
											<th>Company Name</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{this.state.companies.map(company => (
											<tr className="myRow">
												<td id="name">
													{company.companyName}
												</td>

												<td>
												<Link
														to={
															"/companies/" +
															company._id
														}
													>
													<Button> Edit </Button>
													</Link>
												</td>
												<td>
													<Link
														to={
															"/companies/" +
															company._id
														}
													>
														<Button>
															
															Vendors
														</Button>
													</Link>
												</td>
											</tr>
										))}
									</tbody>
									<Link to="/AddCompany">
										<button
											a
											href="/AddCompany"
											type="success"
											className=" my-btn btn btn-success"
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
					<Col size="md-3" />
				</Row>
			</div>
		);
	}
}

export default Companies;
