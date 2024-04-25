import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import ProductListing from "./pages/product-listing";
import Product from "./pages/product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/product-listing/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
