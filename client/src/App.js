import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import AddCompany from "./pages/AddCompany";
import Sidebar from "./pages/Sidebar";
import Footer from "./pages/Footer";
import Header from "./components/Header";

const App = () =>
  <Router>
    <div>
      <Header/>
      <Sidebar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/companies" component={Companies} />
        <Route exact path="/addcompany" component={AddCompany} />
      </Switch>
      <Footer className="footer"/>
    </div>
  </Router>;

export default App;