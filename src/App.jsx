import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<h1>pagenotfound</h1>} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
