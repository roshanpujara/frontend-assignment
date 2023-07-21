import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="container mx-auto py-5">
      <h4 className="welcome-text">Your added items </h4>
      <div className="cartWrapper">
        {items.map((product) => (
          <div className="cartCard" key={product.id}>
            <img className="w-9" src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn">remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
