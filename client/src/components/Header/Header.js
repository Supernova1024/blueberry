import React from "react";
import "./Header.css";

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          Logo
          <img alt="BlueberryLogo" src="./images/Blueberrylogo.png" />
        </a>
        <h1 className="navbar-text navbar-right">BlueBerry</h1>
        <h2 className="navbar-text2 navbar-left">The antioxidant for your Financial Life</h2>
        <button type="button">
          <span className="glyphicon glyphicon-cog" />
        </button>
      </div>
    </div>
  </nav>
);

   export default Header;