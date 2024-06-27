import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsService } from "../services/productService";
import { setLoading, setError } from "../slice/productSlice"; // Assuming these actions are defined in your slice file


export const getBestSeller = createAsyncThunk(
  "bestSeller/get",
  async (data, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const res = await productsService.getBestSeller();
      return res.data;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const getProductTypes = createAsyncThunk(
  "productTypes/get",
  async (data, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const res = await productsService.getProductTypes();
      return res.data;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "products/get",
  async (data, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const res = await productsService.getAllProducts(data);
      return res.data;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const getSingleProducts = createAsyncThunk(
  "singleProduct/get",
  async (id, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const res = await productsService.getSingleProducts(id);
      return res.data;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const getCarts = createAsyncThunk(
  "Carts/get",
  async (Token, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const res = await productsService.getCarts(Token);
      return res.data;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const addCarts = createAsyncThunk(
  "addCart/post",
  async (cartData, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { data } = await productsService.addCarts(cartData);
      return data;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const deleteCart = createAsyncThunk(
  "addCart/delete",
  async (cartData, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { data } = await productsService.deleteCart(cartData);
      return data;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);
