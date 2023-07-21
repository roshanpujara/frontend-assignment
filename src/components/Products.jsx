import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      console.log(products);
    };
    fetchProducts();
  }, []);
  return (
    <div className="productsWrapper">
      {products.length === 0 ? (
        <span style={{ color: "red" }}>loading...</span>
      ) : (
        products.map((value) => {
          return (
            <div className="card" key={value.id}>
              <Link to={"/detail/" + value.id}>
                <img src={value.image} alt="" />
              </Link>
              <div>
                <p>{value.title}</p>
                <span className="price">$ {value.price}</span>
                <div>
                  <button className="btn">Add to cart</button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
