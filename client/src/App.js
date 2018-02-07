import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Home from "./pages/Companies";
import Header from "./components/Header";

const App = () =>
  <Router>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/companies" component={Companies} />
      </Switch>
    </div>
  </Router>;

export default App;