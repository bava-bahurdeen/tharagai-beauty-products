import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsService } from "../services/productService";
import { setLoading, setError } from "../slice/productSlice"; // Assuming these actions are defined in your slice file

export const getProducts = createAsyncThunk(
  "products/get",
  async (data, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const res = await productsService.getProducts(data);
      return res.data;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);
