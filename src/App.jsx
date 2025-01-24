import {Route, Routes} from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Cart from "./pages/cart.jsx";
import Collection from "./pages/collection.jsx";
import Login from "./pages/login.jsx";
import PlaceOrder from "./pages/place-order.jsx";
import Contact from "./pages/contact.jsx";
import Orders from "./pages/orders.jsx";
import Product from "./pages/product.jsx";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;