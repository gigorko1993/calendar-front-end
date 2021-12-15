import { createAction } from "@reduxjs/toolkit";

const addTask = createAction("tasks/add", ({ start, duration, title }) => {
  return {
    payload: {
      start,
      duration,
      title,
    },
  };
});

const getTask = createAction("tasks/get");
const deleteTask = createAction("tasks/delete");
const fetchTaskStart = createAction("tasks/loading");
const fetchTaskFinished = createAction("tasks/finished");
const fetchTaskError = createAction("tasks/error");
const updateTask = createAction("tasks/update", (payload) => {
  return {
    ...payload,
  };
});

const actions = {
  addTask,
  getTask,
  deleteTask,
  fetchTaskStart,
  fetchTaskFinished,
  fetchTaskError,
  updateTask,
};
export default actions;
