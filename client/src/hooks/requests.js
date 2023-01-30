import axios from "axios";
// * for development purposes only
const API_URL = "http://localhost:5000/api/v1";

// * for deployment purposes only
// const API_URL = "https://taskr-tasktracker.netlify.com/api/v1";

const httpGetTasks = async () => {
  return await axios.get(`${API_URL}/tasks`);
};

const httpGetArchivedTasks = async () => {
  return await axios.get(`${API_URL}/tasks/archived`);
};

const httpClearArchivedTasks = async () => {
  return await axios.delete(`${API_URL}/tasks/archived`);
}

const httpRestoreTask = async(taskId) => {
  return await axios.patch(`${API_URL}/tasks/archived/${taskId}`);
}

const httpCreateTask = async (task) => {
  return await axios.post(`${API_URL}/tasks`, task);
};

const httpDeleteTask = async (taskID) => {
  return await axios.delete(`${API_URL}/tasks/archived/${taskID}`);
};

const httpGetTask = async (taskID) => {
  return await axios.get(`${API_URL}/tasks/${taskID}`);
};

const httpUpdateTask = async (taskID, updatedTask) => {
  return await axios.patch(`${API_URL}/tasks/${taskID}`, updatedTask);
};

const httpGetUser = async() => {
  return await axios.get(`http://localhost:5000/auth/login/success`);
}

export {
  httpGetTasks,
  httpCreateTask,
  httpDeleteTask,
  httpUpdateTask,
  httpGetTask,
  httpGetArchivedTasks,
  httpClearArchivedTasks,
  httpRestoreTask,
  httpGetUser,
};
