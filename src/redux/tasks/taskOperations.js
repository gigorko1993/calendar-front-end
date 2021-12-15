import axios from "axios";
import { toast } from "react-toastify";
import actions from "./taskActions";

axios.defaults.baseURL = "http://localhost:3001/api";

const errorMessage = (err) =>
  toast.error(`There are some isues. 
  Message: ${err}.`);

export const getTaskOperation = () => async (dispatch) => {
  dispatch(actions.fetchTaskStart());
  try {
    const { data } = await axios.get("/tasks");
    dispatch(actions.getTask(Object.values(data.data)));
  } catch (error) {
    errorMessage(error);
    dispatch(actions.fetchTaskError(error));
  } finally {
    dispatch(actions.fetchTaskFinished());
  }
};

export const postTaskOperation = (task) => async (dispatch) => {
  dispatch(actions.fetchTaskStart());
  try {
    const { data } = await axios.post("/tasks/create", task);
    toast.success("Add new task 🚀");
    dispatch(actions.addTask(data));
  } catch (error) {
    errorMessage(error);
    dispatch(actions.fetchTaskError(error));
  } finally {
    dispatch(actions.fetchTaskFinished());
  }
};

export const deleteTaskOperation = (id) => async (dispatch) => {
  const taskId = id.toString();
  dispatch(actions.fetchTaskStart());
  try {
    await axios.delete(`/tasks/${id}`);
    dispatch(actions.deleteTask(taskId));
  } catch (error) {
    errorMessage(error);
    dispatch(actions.fetchTaskError(error));
  } finally {
    dispatch(actions.fetchTaskFinished());
  }
};

export const updateTaskOperation = (id, task) => async (dispatch) => {
  const taskId = id.toString();
  dispatch(actions.fetchTaskStart());
  try {
    await axios.put(`/tasks/${id}`, ...task);
    dispatch(actions.updateTask(taskId));
  } catch (error) {
    errorMessage(error);
    dispatch(actions.fetchTaskError(error));
  } finally {
    dispatch(actions.fetchTaskFinished());
  }
};
