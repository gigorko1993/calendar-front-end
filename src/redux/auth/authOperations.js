import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3001/api/users";

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
      const { data } = await axios.post("/signup", credentials);
      token.set(data.token);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/login", credentials);
      token.set(data.token);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk("/logout", async (_, thunkAPI) => {
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
      const { data } = await axios.get("/current");
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);
