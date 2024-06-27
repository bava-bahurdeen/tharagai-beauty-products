import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "../thunks/userThunk";

const initialState = {
  users: {},
  token: localStorage.getItem("token") || "",
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    updateUser(state, action) {
      state.users = action.payload;
    },
    updateToken(state, action) {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateUser, updateToken, setError, setLoading } =
  userSlice.actions;
export default userSlice.reducer;
