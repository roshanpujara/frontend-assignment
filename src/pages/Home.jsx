import { Products } from "../components/Products";
import Search from "../components/Search";
const Home = () => {
  return (
    <div className="container mx-auto py-5">
      <Search />
      <h1 className="my-6">Products</h1>
      <Products />
    </div>
  );
};

export default Home;
