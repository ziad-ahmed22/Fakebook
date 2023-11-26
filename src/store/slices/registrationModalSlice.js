import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const RegistrationModalSlice = createSlice({
  name: "registrationModal",
  initialState,
  reducers: {
    showHideRegistrationModal: (state, action) => (state = action.payload),
  },
});

export const { showHideRegistrationModal } = RegistrationModalSlice.actions;

export default RegistrationModalSlice.reducer;
