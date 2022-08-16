import axios from "axios";
const API_URL = "http://localhost:5000/api/v1";

const httpGetTasks = async() => {
  try {
    return await axios.get(`${API_URL}/tasks`);
  } catch (err) {
    console.log(err);
  }
}

const httpCreateTask = async(task) => {
  try {
    return await axios.post(`${API_URL}/tasks`, task);
  } catch(err) {
    console.log(err);
  }
}

const httpDeleteTask = async(taskID) => {
  try {
    return await axios.delete(`${API_URL}/tasks/${taskID}`);
  } catch (err) {
    console.log(err);
  }
}

export {
  httpGetTasks, httpCreateTask, httpDeleteTask
}