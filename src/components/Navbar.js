import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navBar">
        <div className="logo-wrapper">
          <p>SHOPIKART</p>
        </div>
        <div>
          <ul className="nav-links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/Cart">
              <li>Cart</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
