import React, { Component } from "react";
// import CompanyDataSource from "../../components/CompanyDataSource";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar";

class Home extends Component {

render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
            
          </Col>
         <Col size="md-9">
           <h2>Start Here. Choose Your Data Source</h2>
           <Button
              href="#"
              type="success"
              className="input-lg"
              onClick={() => {
                console.log('clicked on search button');

              }}
              >
             
              Enter My Data
           </Button>

           <Button
              href="#"
              type="success"
              className="input-lg"
              onClick={() => {
                console.log('clicked on search button');

              }}
              >
             
              Use QuickBooks
           </Button>
           
         </Col>
        </Row>
        
       </Container>
    );
}




}

export default Home;
