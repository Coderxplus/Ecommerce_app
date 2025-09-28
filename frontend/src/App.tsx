import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./router/ProtectedRouter";
import { LoginPage } from "./pages/login";
import { Register } from "./pages/register"
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { ProductPage } from "./pages/product";
import { CartProvider } from "./context/CartProvider";
import { AuthProvider } from "./context/AuthProvider";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Home />} />
              <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
              <Route path="/product/:id" element={<ProductPage/>} />
            </Routes>
        </CartProvider>
      </AuthProvider>
      
    </Router>
  );
}
