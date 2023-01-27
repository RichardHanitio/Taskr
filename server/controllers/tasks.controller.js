require("dotenv").config();
const Task = require("../models/tasks.model");
const {createTaskInCalendar, updateTaskInCalendar, getTaskInCalendar, deleteTaskInCalendar} = require("./calendar.controller");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.where("dateArchived").equals(undefined);
    if (!tasks) {
      return res.status(404).json({ error: "No task found" });
    }
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong, please try again" });
  }
};

const getAllArchivedTasks = async (req, res) => {
  try {
    const tasks = await Task.where("dateArchived").ne(undefined);

    if (!tasks) {
      return res.status(404).json({ error: "No task found" });
    }
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong, please try again" });
  }
}

const clearArchivedTasks = async(req, res) => {
  try {
    const deletedTasks = await Task.deleteMany({dateArchived: {$ne: undefined}})
    if(deletedTasks.acknowledged){
      return res.status(200).json({msg : "Tasks cleared successfully"});
    }
  } catch(err) {
    res.status(500).json({ error: "Something went wrong, please try again" });
  }
}

const restoreArchivedTask = async(req, res) => {
  try {
    const {id} = req.params;
    const task = await Task.findOneAndUpdate({_id: id}, {dateArchived: ""}, {
      new : true,
      runValidators : true,
    })
    if(!task) {
      return res.status(404).json({ error: "No task found" });
    }

    // set di calendar
    createTaskInCalendar(task);

    res.status(200).json({msg: "Task restored successfully", task});
    

  } catch (err) {
    res.status(500).json({ error: "Something went wrong, please try again" });
  }
}

const createTask = async (req, res) => {
  try {
    const { task, desc, dueDate, priority } = req.body;
    const newTask = await Task.create({
      task,
      desc,
      dueDate,
      priority,
    });

    // set in calendar
    createTaskInCalendar(newTask);

    res.status(201).json({ msg: "Task created successfully", newTask });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong, please try again" });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ _id: id });
    
    // get from calendar
    getTaskInCalendar(id);

    if (!task) {
      return res.status(404).json({ error: `No task with id ${id} found` });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong, please try again" });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ error: `No task with id ${id} found` });
    }

    // kalau bukan di archive
    const updatedTask = req.body;
    if(!req.body.dateArchived) {
      
      // set in calendar
      updateTaskInCalendar(id, updatedTask);
      
      return res.status(200).json({ msg: "Task updated successfully", task });
    }

    // kalau di archive
    deleteTaskInCalendar(id);

    return res.status(200).json({ msg: "Task archived successfully", task });

  } catch (err) {
    res.status(500).json({ error: "Something went wrong, please try again" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ error: `No task with id ${taskID} found` });
    }
    
    // set in calendar
    deleteTaskInCalendar(taskID);

    res.status(200).json({ msg: "Task deleted successfully", task });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong, please try again" });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask, getAllArchivedTasks, clearArchivedTasks, restoreArchivedTask };
