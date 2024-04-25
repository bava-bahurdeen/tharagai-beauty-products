import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: localStorage.getItem("users") || {},
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.users = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
