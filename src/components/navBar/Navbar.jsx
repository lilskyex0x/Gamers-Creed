import React from "react";
import { faChevronLeft, faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar" id="myNavbar">
        <div className="logo-container">
          <div className="backArrow__container">
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ffffff" }} />
            <span className="year"><h3>2015</h3></span>
          </div>
          <ul className="nav-menu">
            <li className="nav-list">
              <NavLink className="nav-link" to="/">
                most views
              </NavLink>
            </li>
          </ul>
          <div className="mic__container">
            <FontAwesomeIcon icon={faMicrophone} style={{color: "#ffffff",}} />
            <FontAwesomeIcon icon={faGear} style={{color: "#ffffff",}} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
