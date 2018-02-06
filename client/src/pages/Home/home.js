import React, { Component } from "react";
import CompanyDataSource from "../../components/CompanyDataSource";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";


class Home extends Component {

render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
          	<Link to="/">Home</Link>
          	<Link to="#">Companies</Link>
          	<Link to="#">Pricing</Link>
          	<Link to="#">About</Link>
          </Col>
         <Col size="md-9">
         <CompanyDataSource/>
         </Col>
        </Row>
       </Container>
    );
}




}

export default Home;
