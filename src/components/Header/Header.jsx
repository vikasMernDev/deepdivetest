import React from "react";
import { Link } from "react-router-dom";
import './header.css'


function Header() {
  return (
    <div className="header">
      <div className="headerLogo">
        <p>Pet Collection</p>
      </div>
      <div className="menuList">
        <Link to="/dashboard" className="links-header">Home</Link>
        <Link to="/add-pet" className="links-header">Customers</Link>
        <Link to="/user-list"className="links-header">Pet Store</Link>
        <Link to="/" className="links-header">Logout</Link>
      </div>  
  </div>
  );
}

export default Header;
