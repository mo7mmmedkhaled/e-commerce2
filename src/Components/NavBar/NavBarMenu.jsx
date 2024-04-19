import React from "react";
import "./NavBarMenu.css";
import { Link, NavLink } from "react-router-dom";

const NavBarMenu = () => {
  return (
    <div className="NavBar-menu">
      <ul>
        <NavLink to="/mens">
          <li>Men</li>
        </NavLink>
        <NavLink to="/womens">
          <li>Women</li>
        </NavLink>
        <NavLink to="/kids">
          <li>Kids</li>
        </NavLink>
      </ul>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default NavBarMenu;
