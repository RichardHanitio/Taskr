const getAllTasks = (req, res) => {
  res.status(200).send("get all tasks")
}

const createTask = (req, res) => {
  res.status(201).send("create task")
}

const getTask = (req, res) => {
  res.status(200).send("get task");
}

const updateTask = (req, res) => {
  res.status(200).send("update task");
}

const deleteTask = (req, res) => {
  res.status(200).send("delete task");
}

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask};