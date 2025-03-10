import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getSingleProducts,
  getCarts,
  addCarts,
  deleteCart,
  getBestSeller,
  getProductTypes,
} from "../thunks/productThunk";

const initialState = {
  products: [],
  singleProduct: {},
  cart: [],
  loading: false,
  error: null,
  bestSeller: [],
  productTypes: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
    addCart(state, action) {
      state.cart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBestSeller.fulfilled, (state, action) => {
        state.bestSeller = action.payload;
      })
      .addCase(getProductTypes.fulfilled, (state, action) => {
        state.productTypes = action.payload;
      })
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getSingleProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase(getSingleProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCarts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCarts.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(getCarts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addCarts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCarts.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(addCarts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(deleteCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setLoading, setError, clearError, addCart, cartTot } =
  productsSlice.actions;

export default productsSlice.reducer;
