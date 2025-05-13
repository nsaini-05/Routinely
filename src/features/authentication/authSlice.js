import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
