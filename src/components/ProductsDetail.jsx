import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ProductsDetail = () => {
  const [detail, setDetail] = useState([]);
  const data = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${data.id}`
        );
        setDetail(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [detail]);
  return (
    <div className="container mx-auto py-5 flex justify-between">
      <div className="detail-wrapper">
        <div>
          <img src={detail.image} alt="" />
        </div>
        <div className="detail-right">
          <h1 className="font-bold">{detail.title}</h1>
          <div>
            <h4>${detail.price}</h4>
            <span className="bg-red-300">{detail.category}</span>
          </div>

          <span className="bg-green-200 text-blue-900">
            {detail.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
