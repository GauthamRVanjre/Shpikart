import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const getData = useSelector((state) => state.cartReducer.cart);
  console.log(getData);
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
            <Link to="/cart">
              <li className="dropdown">
                Add to Cart
                <span class="badge text-bg-secondary mx-2 p-2">
                  {getData.length}
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
