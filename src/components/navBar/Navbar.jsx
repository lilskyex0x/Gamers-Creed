import React from "react";
import {
  faChevronLeft,
  faMicrophone,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

const Navbar = ({ year }) => (
  <>
    <nav className="navbar" id="myNavbar">
      <div className="nav__wrapper">
        <Link id="back" to="/">
          <FontAwesomeIcon icon={faChevronLeft} className="icon" />
          {year}
        </Link>
        <ul className="nav-menu">
          <li className="nav-list">
            <Link className="nav-link" to="/">
              most views
            </Link>
          </li>
        </ul>
        <div className="mic__container">
          <FontAwesomeIcon icon={faMicrophone} className="icon" />
          <FontAwesomeIcon icon={faGear} className="icon" />
        </div>
      </div>
    </nav>
  </>
);

Navbar.defaultProps = {
  year: null,
};

export default Navbar;
