import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const LoaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showHideLoader: (state, action) => (state = action.payload),
  },
});

export const { showHideLoader } = LoaderSlice.actions;

export default LoaderSlice.reducer;
