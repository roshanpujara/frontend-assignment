import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeItem = (item) => {
    dispatch(remove(item));
  };
  return (
    <div className="container mx-auto py-5">
      <h4 className="welcome-text">Your added items </h4>
      <div className="cartWrapper">
        {items.map((product) => (
          <div className="cartCard" key={product.id}>
            <img className="w-9" src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button
              className="btn"
              onClick={() => {
                removeItem(product.id);
              }}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
