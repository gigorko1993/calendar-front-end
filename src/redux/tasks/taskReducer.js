import { createSlice } from "@reduxjs/toolkit";
import actions from "./taskActions";

const InitialState = {
  items: [],
  loader: false,
  error: "",
};
const taskItems = createSlice(InitialState, {
  [actions.getTask]: (state, { payload }) => ({
    ...state,
    items: [...payload],
  }),
  [actions.addTask]: (state, { payload }) => ({
    ...state,
    items: [...state.items, payload],
  }),
  [actions.updateTask]: (state, { payload }) => ({
    ...state,
    items: [...state.items, payload],
  }),
  [actions.deleteTask]: (state, { payload }) => ({
    ...state,
    items: state.items.filter(({ id }) => id !== payload),
  }),

  [actions.fetchContactsStart]: (state) => ({
    ...state,
    loader: true,
  }),
  [actions.fetchContactsFinished]: (state) => ({
    ...state,
    loader: false,
  }),
  [actions.fetchContactsError]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
});

export default taskItems.reducer;
