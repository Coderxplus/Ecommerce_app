import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register"
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { ProductPage } from "./pages/product";
import { CartProvider } from "./context/CartProvider";

export default function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/:id" element={<ProductPage/>} />
        </Routes>
      </CartProvider>
    </Router>
  );
}
