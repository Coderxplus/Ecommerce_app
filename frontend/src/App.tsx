import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register"
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}
