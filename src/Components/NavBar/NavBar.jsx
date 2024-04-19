import React, { useState } from "react";
import "./NavBar.css";
import { BsBagFill } from "react-icons/bs";
import { BsFillBagHeartFill, BsJustify } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import NavBarMenu from "./NavBarMenu";

const NavBar = () => {
  const cartQuantity = useSelector((state) => state.cartSlice.totalQuantity);
  const [toogle, setToogle] = useState(false);
  const toogleHandeller = () => {
    setToogle(!toogle);
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <ul className="nav-menu">
          <NavLink to="/">
            <li>Shop</li>
          </NavLink>
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
        <div className="nav-login-cart">
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <Link to="favorite">
            <BsFillBagHeartFill className="cart-bag" />
          </Link>
          <Link to="cart">
            <BsBagFill className="cart-bag" />
            <div className="cart-count">{cartQuantity}</div>
          </Link>
          <div className="menu">
            <BsJustify className="cart-bag" onClick={toogleHandeller} />
          </div>
        </div>
      </div>
      {toogle && <NavBarMenu />}
    </>
  );
};

export default NavBar;
