import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginService } from "../services/userService";
import { setLoading, setError } from "../slice/userSlice"; // Assuming these actions are defined in your slice file

export const logIn = createAsyncThunk(
  "user/post",
  async (token, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const res = await loginService.logIn(token);
      return res.data;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);
