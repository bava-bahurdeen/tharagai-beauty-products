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
<<<<<<< HEAD
import Cart from "./pages/cart/Cart";
import { cartTot } from "./store/slice/productSlice";
=======
import Login from "./pages/admin/login/Login";
import SignUp from "./pages/admin/login/SignUp";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import MainDashBoard from "./pages/admin/dashboard/MainDashBoard";
import Order from "./pages/admin/dashboard/order/Order";
import NewProductFunct from "./pages/admin/dashboard/newProduct/NewProductFunct";
>>>>>>> d612d69e444c2694bece70a19cc73811622e327c

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
<<<<<<< HEAD
  // localStorage.removeItem("cart");

  const cart = useSelector((state) => state.products.cart);

  var total = 0;

  for (var i of cart) {
    total = total + i.itemCount * Number(i.selectedVariationPrice);
  }
  dispatch(cartTot(total));
=======
  const UserPages = () => (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<ProductCategories />} />
        <Route path="/product-detail/:productId" element={<ProductDetails />} />
      </Routes>
>>>>>>> d612d69e444c2694bece70a19cc73811622e327c

      <Footer />
    </div>
  );

  const AdminRoutes = () => (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="dashboard" element={<Dashboard/>}>
        <Route path="" element={<MainDashBoard />} />
        <Route path="order" element={<Order />} />
        <Route path="newproduct" element={<NewProductFunct/>} />
      </Route>
    </Routes>
  );
  return (
    <div>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
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
=======
          <Route path="/*" element={<UserPages />} />
          <Route path="admin/*" element={<AdminRoutes />} />
>>>>>>> d612d69e444c2694bece70a19cc73811622e327c
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
