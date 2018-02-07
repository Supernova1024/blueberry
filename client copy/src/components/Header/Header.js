import React from "react";
import "./Header.css";

const Header = () =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
      	<a href="/" className="navbar-brand">
      	Logo
          <img alt="" src=""/>
        </a>
        <h1 className="navbar-text navbar-right">BlueBerry</h1>
      	<button type="button">
      		<span className="glyphicon glyphicon-cog"></span>
      	</button> 
      </div>
     </div>
   </nav>;

   export default Header;