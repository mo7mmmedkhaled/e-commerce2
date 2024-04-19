import React from "react";
import "./CSS/Cart.css";
import FavoriteProduct from "./../Components/Favorite/FavoriteProduct";

const Favorite = () => {
  return (
    <div className="main-cart">
      <FavoriteProduct />
    </div>
  );
};

export default Favorite;
