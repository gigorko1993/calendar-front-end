import { createAction } from "@reduxjs/toolkit";

const addTask = createAction("contacts/Add", ({ start, duration, title }) => {
  return {
    payload: {
      start,
      duration,
      title,
    },
  };
});

const getTask = createAction("contacts/Get");
const deleteTask = createAction("contacts/Delete");
const fetchTaskStart = createAction("contacts/loading");
const fetchTaskFinished = createAction("contacts/finished");
const fetchTaskError = createAction("contacts/error");
const updateTask = createAction("contacts/filter");

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
