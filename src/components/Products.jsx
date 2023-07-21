import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { successToast } from "../config/toastify.config";
import { getData } from "../store/cartSlice";
export const Products = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.products);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(getData(data));
    };
    fetchProducts();
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));

    successToast("successfully added to cart");
  };
  return (
    <div className="productsWrapper">
      {items.length === 0 ? (
        <span style={{ color: "red" }}>loading...</span>
      ) : (
        items.map((value) => {
          return (
            <div className="card" key={value.id}>
              <Link to={"/detail/" + value.id}>
                <img src={value.image} alt="" />
              </Link>
              <div>
                <p>{value.title}</p>
                <span className="price">$ {value.price}</span>
                <div>
                  <button
                    className="btn"
                    onClick={() => {
                      handleAdd(value);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
