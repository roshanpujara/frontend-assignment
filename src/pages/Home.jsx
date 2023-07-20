import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../config/constants";

const Home = () => {
  const { data, isLoading, error } = useQuery(["productsList"], async () => {
    const response = await axios.get(API_URL);
    return response.data;
  });
  console.log(data);
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>heyerror {error.message}</div>;
  }
  return <div className="bg-green-100">Home</div>;
};

export default Home;
