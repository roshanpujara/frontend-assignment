import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const items = useSelector((state) => state.cart.addedItems);
  
  return (
    <div className="container mx-auto py-5 flex justify-between">
      <Link to="/">
        <span className="text-lg font-bold">ONLINE STORE</span>
      </Link>
      <div className="flex gap-5">
        <Link className="navlink" to="/">
          Home
        </Link>
        <Link className="navlink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart {items.length}</span>
      </div>
    </div>
  );
};

export default Header;
