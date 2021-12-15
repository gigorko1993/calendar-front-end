import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3001/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.data.token);
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.data.token);
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk("/users/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/logout");
    token.unset();
  } catch (err) {
    return thunkAPI.rejectWithValue();
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, thunkAPI) => {
    try {
      const persistedToken = thunkAPI.getState().auth.token;
      token.set(persistedToken);
      const { data } = await axios.get("/users/current");
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);
