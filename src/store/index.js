import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import userSlice from "./slice/userSlice";

const reducer = {
  products: productSlice,
  users: userSlice,
};

const store = configureStore({
  devTools: true,
  reducer: reducer,
});

export default store;
