import React from "react";
import "./Header.css";
import Logo from "./BBlogo.png";


const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header col-md-12">
        <a href="/" className="navbar-brand">
          
          <img id="logo" height="45" alt="BlueberryLogo" src= {Logo} />

        </a>
        
        <p className="navbar-text2 navbar-left tag-line" >The Antioxidant for your Financial Life</p>
        
          <span className="glyphicon glyphicon-cog " id ="gear" />
        
      </div>
    </div>
  </nav>
);

   export default Header;