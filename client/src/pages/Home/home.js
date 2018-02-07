import React, { Component } from "react";
// import CompanyDataSource from "../../components/CompanyDataSource";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button";

class Home extends Component {

render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
          	<Row><p><Link to="/">Home</Link></p></Row>
          	<Row><p><Link to="#">Companies</Link></p></Row>
          	<Row><p><Link to="#">Pricing</Link></p></Row>
          	<Row><p><Link to="#">About</Link></p></Row>
          </Col>
         <Col size="md-9">
         <h2>Choose an option</h2>
         <Button
            href="#"
            type="success"
            className="input-lg"
            >
           
            Search
         </Button>
         </Col>
        </Row>
       </Container>
    );
}




}

export default Home;
