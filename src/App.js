import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import MobileMenu from "./components/MobileMenu";
import Cart from "./components/Cart";
import WomenSneakers from "./components/WomenSneakers";
import MenSneakers from "./components/MenSneakers";
import BestSelling from "./components/BestSelling";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileCart from "./components/MobileCart";

function App() {
  AOS.init();
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MobileMenu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/WomenSneakers" element={<WomenSneakers />}></Route>
          <Route path="/mensneakers" element={<MenSneakers />}></Route>
          <Route path="/bestselling" element={<BestSelling />}></Route>
          <Route element={<BestSelling />}></Route>
        </Routes>
        <Footer />
        <MobileCart />
      </BrowserRouter>
    </div>
  );
}

export default App;
