import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getSingleProducts } from "../thunks/productThunk";

const initialState = {
  products: [],
  singleProduct: {},
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  cartTotal: 0,
  loading: false,
  error: null,
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
    cartTot(state, action) {
      state.cartTotal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
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
      });
  },
});

export const { setLoading, setError, clearError, addCart,cartTot } =
  productsSlice.actions;

export default productsSlice.reducer;
