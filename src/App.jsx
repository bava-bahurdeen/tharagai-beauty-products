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
import { getAllProducts, getCarts,getBestSeller ,getProductTypes} from "./store/thunks/productThunk";
<<<<<<< HEAD
import { useEffect,lazy, Suspense } from "react";
=======
import { useEffect } from "react";
>>>>>>> 22000fa94674e48ab7353d623f8e2a4e3416402c

import Cart from "./pages/cart/Cart";

import Login from "./pages/users/Login";
import SignUp from "./pages/admin/login/SignUp";
<<<<<<< HEAD
import Profile from "./pages/profile/Profile"
const Order=lazy(()=>import('./pages/profile/orders/Order'))
const Address=lazy(()=>import('./pages/profile/address/Address'))
const Payment=lazy(()=>import('./pages/profile/payment/Payment'))
const EditAddress=lazy(()=>import('./pages/profile/address/EditAddress'))
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Account from "./pages/account/Account";
import { logIn } from "./store/thunks/userThunk";
=======

import Dashboard from "./pages/admin/dashboard/Dashboard";
import Account from "./pages/account/Account";
import { logIn } from "./store/thunks/userThunk";
import UserAddress from "./pages/account/UserAddress";
>>>>>>> 22000fa94674e48ab7353d623f8e2a4e3416402c

function App() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.users.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        dispatch(getBestSeller());
        dispatch(getProductTypes());
        dispatch(getCarts(token));
        dispatch(logIn(token));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch, token]);

  const UserPages = () => (
    <div>
      <Header />
<<<<<<< HEAD
      <Suspense>
=======
>>>>>>> 22000fa94674e48ab7353d623f8e2a4e3416402c
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/categories/:productType"
          element={<ProductCategories />}
        />
        <Route path="/product-detail/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/orders" element={<Order/>}/>
        <Route path="/address" element={<Address/>}/>
        <Route path="/new-address" element={<EditAddress/>} />
        <Route path="/payment" element={<Payment/>}/>

      </Routes>
        </Suspense>
=======
        <Route path="/address" element={<UserAddress />} />
      </Routes>
>>>>>>> 22000fa94674e48ab7353d623f8e2a4e3416402c
      <Footer />
    </div>
  );

  const UserLogin = () => {
    return (
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    );
  };

  const Accounturl = () => {
    return (
      <div>
        <Routes>
          <Route path="" element={<Account />} />
        </Routes>
      </div>
    );
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserPages />} />
          <Route path="/auth/*" element={<UserLogin />} />
          <Route path="admin/*" element={<Dashboard />} />
          <Route path="account/*" element={<Accounturl />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
