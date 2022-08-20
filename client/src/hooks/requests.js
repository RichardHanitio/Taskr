import axios from "axios";
const API_URL = "http://localhost:5000/api/v1";

const httpGetTasks = async () => {
  return await axios.get(`${API_URL}/tasks`);
};

const httpCreateTask = async (task) => {
  return await axios.post(`${API_URL}/tasks`, task);
};

const httpDeleteTask = async (taskID) => {
  return await axios.delete(`${API_URL}/tasks/${taskID}`);
};

const httpGetTask = async (taskID) => {
  return await axios.get(`${API_URL}/tasks/${taskID}`);
};

const httpUpdateTask = async (taskID, updatedTask) => {
  return await axios.patch(`${API_URL}/tasks/${taskID}`, updatedTask);
};

export {
  httpGetTasks,
  httpCreateTask,
  httpDeleteTask,
  httpUpdateTask,
  httpGetTask,
};
