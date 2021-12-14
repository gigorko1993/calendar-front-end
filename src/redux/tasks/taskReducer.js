import { createReducer } from "@reduxjs/toolkit";
import actions from "./taskActions";

const InitialState = {
  items: [],
  loader: false,
  error: "",
};
const taskItems = createReducer(InitialState, {
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

  [actions.fetchTaskStart]: (state) => ({
    ...state,
    loader: true,
  }),
  [actions.fetchTaskFinished]: (state) => ({
    ...state,
    loader: false,
  }),
  [actions.fetchTaskError]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
});

export default taskItems;
