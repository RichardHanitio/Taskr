const Task = require("../models/tasks.model");
const calendar = require("../calendar");

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

    let priorityColorCode;
    if (priority === "high") {
      priorityColorCode = "11";
    } else if (priority === "medium") {
      priorityColorCode = "5";
    } else if (priority === "low") {
      priorityColorCode = "10";
    }

    let calendarTask = {
      id: newTask._id.toString(),
      created: new Date(newTask.dateCreated),
      summary: task,
      description: desc,
      start: {
        dateTime: new Date(dueDate.toLocaleString()),
        timeZone: "Asia/Jakarta",
      },
      end: {
        dateTime: new Date(dueDate.toLocaleString()),
        timeZone: "Asia/Jakarta",
      },
      colorId: priorityColorCode,
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 30 },
          { method: "popup", minutes: 10 },
        ],
      },
    };

    calendar.events.insert(
      {
        calendarId: "primary",
        resource: calendarTask,
      },
      (err, event) => {
        if (err) {
          console.log(err);
          return;
        }
      }
    );

    res.status(201).json({ msg: "Task created successfully", newTask });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong, please try again" });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ _id: id });
    
    calendar.events.get(
    { calendarId: "primary", eventId: id },
    (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
    })
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

    if(!req.body.dateArchived) {
      const { task: taskName, desc, dueDate, priority } = req.body;

      let priorityColorCode;
      if (priority === "high") {
        priorityColorCode = "11";
      } else if (priority === "medium") {
        priorityColorCode = "5";
      } else if (priority === "low") {
        priorityColorCode = "10";
      }

      let calendarTask = {
        summary: taskName,
        description: desc,
        start: {
          dateTime: new Date(dueDate.toLocaleString()),
          timeZone: "Asia/Jakarta",
        },
        end: {
          dateTime: new Date(dueDate.toLocaleString()),
          timeZone: "Asia/Jakarta",
        },
        colorId: priorityColorCode,
      };

      calendar.events.patch(
        { calendarId: "primary", eventId: id, resource: calendarTask },
        (err) => {
          if (err) {
            console.log(err);
            return;
          }
        }
      );
      return res.status(200).json({ msg: "Task updated successfully", task });
    }
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
    calendar.events.delete(
      { calendarId: "primary", eventId: taskID },
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
      }
    );
    res.status(200).json({ msg: "Task deleted successfully", task });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong, please try again" });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask, getAllArchivedTasks, clearArchivedTasks, restoreArchivedTask };
