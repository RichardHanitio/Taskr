const {calendar} = require("../calendar");

const colorCode = new Map([
  ["high", "11"],
  ["medium", "5"],
  ["low", "10"],
]);

function getPriorityColorCode(priority) {
  return colorCode.get(priority);
}

function createTaskInCalendar(newTask) {
  try {
    let calendarTask = {
      id: newTask._id.toString(),
      created: new Date(newTask.dateCreated),
      summary: newTask.task,
      description: newTask.desc,
      start: {
        dateTime: new Date(newTask.dueDate.toLocaleString()),
        timeZone: "Asia/Jakarta",
      },
      end: {
        dateTime: new Date(newTask.dueDate.toLocaleString()),
        timeZone: "Asia/Jakarta",
      },
      colorId: getPriorityColorCode(newTask.priority),
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
          return;
        }
      }
    );
  }
  catch(err) {
  }

}

function updateTaskInCalendar(id, updatedTask) {
  const { task: taskName, desc, dueDate, priority } = updatedTask;
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
    colorId: getPriorityColorCode(priority),
  };

  calendar.events.patch(
    { calendarId: "primary", eventId: id, resource: calendarTask },
    (err) => {
      if (err) {
        return;
      }
    }
  );
}

function deleteTaskInCalendar(taskID) {
  calendar.events.delete({ calendarId: "primary", eventId: taskID }, (err) => {
    if (err) {
      return;
    }
  });
}

function getTaskInCalendar(taskID) {
  calendar.events.get(
    { calendarId: "primary", eventId: taskID },
    (err, res) => {
      if (err) {
        return;
      }
    }
  );
}

module.exports = {
  createTaskInCalendar, updateTaskInCalendar, getTaskInCalendar, deleteTaskInCalendar
}