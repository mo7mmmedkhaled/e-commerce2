import React from "react";
import { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "./../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_Product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" className="banner-category" />
      <div className="category-item">
        {all_Product.map((e, i) => {
          if (props.category === e.category) {
            return <Item key={i} item={e} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="category-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
