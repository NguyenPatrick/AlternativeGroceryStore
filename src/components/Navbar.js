import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="brand-logo">
          Patrick's Grocery Store
        </Link>

        <ul className="right">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Checkout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
