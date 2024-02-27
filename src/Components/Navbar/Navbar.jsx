import React, { useState } from "react";
import "./Navbar.css";

import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { HashRouter, Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("buy");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>BUYER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("buy");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Buy
          </Link>
          {menu === "buy" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Mens
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
