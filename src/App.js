import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import MobileMenu from "./components/MobileMenu";
import Cart from "./components/Cart";
import WomenShoes from "./components/WomenShoes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MobileMenu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/womenshoe" element={<WomenShoes />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
