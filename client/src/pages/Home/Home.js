import React, { Component } from "react";
import QBlogo from "./QBlogo.png";
import Enter from "./Enter3.png";
// import CompanyDataSource from "../../components/CompanyDataSource";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar";

class Home extends Component {

render() {
    return <Container fluid>
        <Row>
          <Col size="md-3" />
          <Col size="md-9">
            <h2>Start Here. Choose Your Data Source</h2>
            <Button>
              <img id="bb2" height="40" alt="Enter" src={Enter} onClick={this.myfunction} />
            </Button>

            <Button>
              <img id="QBlogo" height="40" alt="QuickBook" src={QBlogo} onClick={this.myfunction} />
            </Button>
          </Col>
        </Row>
      </Container>;
}




}

export default Home;
