import API from "../../utils/API";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button";
//import Radio_Button from "../../components/Radio_Button";
import Jumbotron from "../../components/Jumbotron";
//import "./Vendors.css";
import Input from "../../components/Input";
import "./Vendors.css";


class Vendor extends Component {


state = {
  //companyList:["Home Depot", "Target", "Walmart", "Publix", "Amazon", "Wendys"]
  company: [],
  vendorIds: [],
  vendors: [],
  filterV: []
};

componentDidMount(){
  this.loadCompany();
  this.getVendors();
 
 

}

loadCompany = () => {
  API.getCompany(this.props.match.params.id)
      .then(res => this.setState({vendorIds: res.data.vendors}))


       //this.setState({ company: res.data }))
      //  .then(res => this.setState({ vendors: res.data.vendors})) 
      .catch(err => console.log(err))

     //console.log(this.state.vendors)
     
        
};



getVendors = () => {
 // this.state.vendors.map((vendor, id) => (
       API.getVendors()
       .then(res => this.setState({vendors: res.data}))
       .then(console.log(this.filter))
       



          

  //  ))
};

filterVendors = () => {

   //     console.log(vendorId)
 // })
}


  render(){
    return (

      <div>
        <Row>
          <Col size="md-3">
          </Col>
          <Col size="md-12">
            <div style={{ textAlign: 'center' }}>
          
              <div className=" jumbotron mytable">
                  <h3>Vendors</h3>
              <table className="table table-striped">
            <thead>
          <tr className="myRow">
            <th>
              Name
            </th>
            <th>
              Box 7
            </th>
            
          </tr>
        </thead>
        <tbody>
              {this.state.vendors.map(vendor => (
            <tr className="myRow">
            <td className="td-width">
                            {vendor.lastName}, {vendor.firstName} 
            </td>
            <td className="myRowTd">
                <Input />
        
            </td>
            </tr>
            ))}
              </tbody>
               <button className="btn btn-success vendor-btn"> Preview 1099's </button> 
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

export default Vendor;