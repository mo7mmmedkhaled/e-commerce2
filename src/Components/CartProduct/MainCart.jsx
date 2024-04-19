import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import "./MainCart.css";

const MainCart = () => {
  const cartitem = useSelector((state) => state.cartSlice.cartItem);
  return (
    <div className="big-cart">
      {cartitem.length === 0 ? (
        <h1>No Product Found</h1>
      ) : (
        cartitem.map((item) => (
          <CartProduct
            key={item.id}
            product={{
              id: item.id,
              name: item.name,
              price: item.price,
              image: item.image,
              quantity: item.quantity,
              total: item.totalPrice,
            }}
          />
        ))
      )}
    </div>
  );
};

export default MainCart;
