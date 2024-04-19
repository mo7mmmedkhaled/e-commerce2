import React from "react";
import "./Offers.css";
import offer from "../assets/offer.jpeg";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only On Best Sellers Products</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={offer} alt="" />
      </div>
    </div>
  );
};

export default Offers;
