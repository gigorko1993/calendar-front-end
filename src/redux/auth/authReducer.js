import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUser } from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  isLoader: false,
  token: null,
  isLoggedIn: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoader = false;
      state.isLoggedIn = true;
    },
    [register.pending](state) {
      state.isLoader = true;
      state.error = false;
    },
    [register.rejected](state) {
      state = { ...initialState, error: true };
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoader = false;
      state.isLoggedIn = true;
    },
    [logIn.pending](state) {
      state.isLoader = true;
      state.error = false;
    },
    [logIn.rejected](state) {
      state = { ...initialState, error: true };
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoader = false;
    },
    [logOut.pending](state) {
      state.error = false;
    },
    [logOut.rejected](state) {
      state.error = true;
      state.isLoader = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isLoader = false;
    },
    [fetchCurrentUser.pending](state) {
      state.error = false;
      state.isLoader = true;
    },
    [fetchCurrentUser.rejected](state) {
      state.error = true;
      state.isLoader = false;
    },
  },
});

export default authSlice.reducer;
