import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  type: "",
};

const ToastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
  },
});

export const { showToast } = ToastSlice.actions;
export default ToastSlice.reducer;
