import React from "react";
import "./FavoriteProduct.css";
import { useSelector } from "react-redux";
import Item from "../Item/Item";

const FavoriteProduct = () => {
  const favItem = useSelector((state) => state.cartSlice.favItem);
  return (
    <div className="main-fav">
      {favItem.length === 0 ? (
        <h1>No Favorite Found</h1>
      ) : (
        favItem.map((item, i) => <Item key={i} item={item} />)
      )}
    </div>
  );
};

export default FavoriteProduct;
