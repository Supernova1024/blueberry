import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import Vendors from "./pages/Vendors";
import Login from "./pages/Login";
import AddCompany from "./pages/AddCompany";

import DisplayPdf from "./pages/DisplayPdf";

import AddVendor from "./pages/AddVendor";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Splashpage from "./components/Splashpage";

import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
const App = () => (
  <Router>
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-6">
            <Switch>
              <Jumbotron id="main">
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route excat path="/SplashPage" component={Splashpage} />
                <Route exact path="/companies" component={Companies} />
                <Route exact path="/addcompany" component={AddCompany} />
                <Route exact path="/displaypdf" component={DisplayPdf} />
                <Route exact path="/companies/:id" component={Vendors} />
                <Route excat path="/addvendor" component={AddVendor} />
              </Jumbotron>
            </Switch>
          </div>
          <div className="col-md-3" />
        </div>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
