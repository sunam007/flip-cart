import React from "react";
import logo from "../../images/Flipkart_logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="flipcart logo" />
      <nav className="nav_links">
        <li>
          <a href="shop">Shop</a>
        </li>
        <li>
          <a href="order">Order Review</a>
        </li>
        <li>
          <a href="inventory">Manage Inventory</a>
        </li>
      </nav>
      <a className="login-btn" href="#">
        <button>Contact</button>
      </a>
    </div>
  );
};

export default Header;
