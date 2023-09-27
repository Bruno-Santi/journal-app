import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "not-auntenthicated", //!"checking" 'not-auntenthiced', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {},
    logout: (state, payload) => {},
    checkingCredentials: (state) => {},
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
