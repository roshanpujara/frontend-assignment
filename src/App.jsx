import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { ToastContainer } from "react-toastify";
import ProductsDetail from "./components/ProductsDetail";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<ProductsDetail />} />
        <Route path="/*" element={<h1>pagenotfound</h1>} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
