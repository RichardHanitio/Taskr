const Task = require("../models/tasks.model");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    if(!tasks) {
      return res.status(404).json({error : "No task found"});
    }
    res.status(200).json(tasks)
  } catch(err) {
    res.status(500).json({ error: "Something went wrong, please try again" });
  }
}

const createTask = async (req, res) => {
  try {
    const {task, desc, dueDate, priority} = req.body;
    const newTask = await Task.create({
      task, desc, dueDate, priority
    })
    res.status(201).json({msg: "Task created successfully" ,newTask})
  } catch(err) {
    res.status(500).json({error : "Something went wrong, please try again"});
  }
}

const getTask = async(req, res) => {
  try {
    const {id} = req.params;
    const task = await Task.findOne({_id: id});
    if(!task) {
      return res.status(404).json({"error" : `No task with id ${id} found`});
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong, please try again" });
  }
}

const updateTask = async(req, res) => {
  try {
    const {id} = req.params;
    const task = await Task.findOneAndUpdate({_id: id}, req.body, {
      new : true, runValidators : true,
    });
    if(!task) {
      return res.status(404).json({ error: `No task with id ${id} found` });
    }
    res.status(200).json({msg: "Task updated successfully", task});
  } catch(err) {
    res.status(500).json({ error: "Something went wrong, please try again" });
  }
}

const deleteTask = async(req, res) => {
  try {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndDelete({_id: taskID});
    if(!task) {
      return res.status(404).json({error : `No task with id ${taskID} found`})
    }
    res.status(200).json({msg: "Task deleted successfully", task})
  } catch (err) {
    res.status(500).json({error : "Something went wrong, please try again"});
  }
}

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask};