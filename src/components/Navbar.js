import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navBar">
        <div className="logo-wrapper">
          <p>SHOPIKART</p>
        </div>
        <div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Cart</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
