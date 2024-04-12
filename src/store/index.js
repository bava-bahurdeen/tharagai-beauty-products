import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";

// const reducer = {
//   products: productSlice,
// };

const store = configureStore({
  devTools: true,
  reducer: productSlice,
});

export default store;
