const Task = require("../models/tasks.model");

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});
    if(!task) {
      return res.status(404).json({"error" : "No task found"});
    }
    res.status(200).json(task)
  } catch(err) {
    res.status(500).json({"error" : err});
  }
}

const createTask = async (req, res) => {
  try {
    const {task, desc, dueDate, priority} = req.body;
    const newTask = await Task.create({
      task, desc, dueDate, priority
    })
    res.status(201).json(newTask)
  } catch(err) {
    res.status(500).json({"error" : err});
  }
}

const getTask = (req, res) => {
  res.status(200).send("get task");
}

const updateTask = (req, res) => {
  res.status(200).send("update task");
}

const deleteTask = async(req, res) => {
  try {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndDelete({_id: taskID});
    if(!task) {
      return res.status(404).json({"error" : `No task with id ${taskID} found`})
    }
    res.status(200).json({"message": "Task deleted successfully"})
  } catch (err) {
    res.status(500).json({"error" : err});
  }
}

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask};