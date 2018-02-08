import React, { Component } from "react";
// import CompanyDataSource from "../../components/CompanyDataSource";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

class Home extends Component {

render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
            <Sidebar />
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
        <Footer
          topText="Blueberry"
          bottomText="Copyright 2018"
        />
       </Container>
    );
}




}

export default Home;
