import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyCategory from "./Pages/BuyCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<buy />} />
          <Route path="/mens" element={<BuyCategory category="men" />} />
          <Route path="/womens" element={<BuyCategory category="women" />} />
          <Route path="/kids" element={<BuyCategory category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<loginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
