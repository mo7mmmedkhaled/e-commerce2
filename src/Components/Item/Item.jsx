import React from "react";
import "./Item.css";
import { FaRegHeart, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../Store/caSlice";

const Item = ({ item }) => {
  const { id, price, name, image } = item;
  const dispatch = useDispatch();
  const favHandeller = () => {
    dispatch(
      uiActions.addItemToFavorite({
        id,
        price,
        name,
        image,
      })
    );
  };
  const addHandeller = () => {
    dispatch(
      uiActions.addItemToCart({
        id,
        price,
        name,
        image,
      })
    );
  };
  return (
    <div className="item">
      <Link to={`/product/${item.id}`}>
        <img src={item.image} alt="" />
      </Link>
      <div className="item-prices">
        <h3>{item.name}</h3>
        <div className="all-price">
          <div className="item-price-new">${item.price - 10}</div>
          <div className="item-price-old">${item.price}</div>
        </div>
        <div className="item-button">
          <FaRegHeart className="fav-button" onClick={favHandeller} />
          <button onClick={addHandeller}>
            Add To Cart <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
