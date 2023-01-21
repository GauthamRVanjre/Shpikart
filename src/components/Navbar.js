import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import hamburger from "../images/icon-hamburger.svg";

const Navbar = () => {
  const getData = useSelector((state) => state.cartReducer.cart);
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);
  return (
    <>
      <nav className="navBar">
        <div className="logo-wrapper">
          <p>SHOPIKART</p>
        </div>

        <div className="hamburger-icon">
          <button
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <img src={hamburger} alt="hamburger icon" />
          </button>
        </div>
        <div
          className={
            isNavExpanded
              ? "nav-links-container nav-links-parent"
              : "nav-links-container"
          }
        >
          <ul className="nav-links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/cart">
              <li className="dropdown">
                Cart
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
