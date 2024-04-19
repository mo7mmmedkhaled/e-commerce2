import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaPinterest,
  FaSnapchat,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-footer">
        <img src={logo} alt="" />
        <div className="list-footer">
          <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Officers</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="left-icon">
          <FaFacebook />
          <FaInstagram />
          <FaPinterest />
          <FaSnapchat />
          <FaWhatsapp />
        </div>
        <div className="copy-right">
          <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
