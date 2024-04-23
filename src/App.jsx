import Footer from "./mainlayout/Footer";
import Header from "./mainlayout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import ProductCategories from "./pages/categories/ProductCategories";
import ProductDetails from "./pages/categories/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/thunks/productThunk";
import { useEffect } from "react";
import Cart from "./pages/cart/Cart";
import { cartTot } from "./store/slice/productSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  // localStorage.removeItem("cart");

  const cart = useSelector((state) => state.products.cart);

  var total = 0;

  for (var i of cart) {
    total = total + i.itemCount * Number(i.selectedVariationPrice);
  }
  dispatch(cartTot(total));

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<ProductCategories />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetails />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
