import "./CartProduct.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../Store/caSlice";

const CartProduct = (props) => {
  const dispatch = useDispatch();
  const { name, image, price, quantity, id, total } = props.product;
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
  const removeHandeller = () => {
    dispatch(
      uiActions.removeItemToCart({
        id,
        price,
        name,
        image,
      })
    );
  };
  return (
    <div className="cart-card">
      <div className="prod-cart">
        <div className="product-img">
          <img src={image} alt="" />
        </div>
        <div className="product-dis">
          <h1>{name}</h1>
          <h3>${total}</h3>
        </div>
      </div>
      <div className="cart-quntitiy">
        <button onClick={addHandeller}>+</button>
        <h3>{quantity}</h3>
        <button onClick={removeHandeller}>-</button>
      </div>
    </div>
  );
};

export default CartProduct;
