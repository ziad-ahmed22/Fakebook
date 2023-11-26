import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth:
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"))
      ? true
      : false,
  user:
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("user"))) ||
    {},
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerNewUser: (action) => action.payload,
    loginRequest: (action) => action.payload,
    loginResponse: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    logoutRequest: (state) => {
      state.isAuth = false;
      state.user = {};
    },
  },
});

export const { registerNewUser, loginRequest, loginResponse, logoutRequest } =
  AuthSlice.actions;

export default AuthSlice.reducer;
