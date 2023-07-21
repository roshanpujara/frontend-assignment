import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { errorToast } from "../config/toastify.config";
const Cart = () => {
  const items = useSelector((state) => state.cart.addedItems);
  const dispatch = useDispatch();
  const removeItem = (item) => {
    dispatch(remove(item));
    errorToast("removed successfully");
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };
  return (
    <div className="container mx-auto py-5">
      <h4 className="welcome-text font-bold">Your added items </h4>
      <div className="cartWrapper">
        {items.length < 1 ? (
          <h1 className="text-red-700">empty items</h1>
        ) : (
          items.map((product) => (
            <div className="cartCard" key={product.id}>
              <img className="w-9" src={product.image} alt="" />
              <h5>{product.title.slice(0, 20) + "..."}</h5>
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
          ))
        )}
      </div>
      {items.length > 0 && (
        <h1 className="bg-cyan-200 flex flex-row-reverse">
          Total price: $ {calculateTotalPrice()}
        </h1>
      )}
    </div>
  );
};

export default Cart;
