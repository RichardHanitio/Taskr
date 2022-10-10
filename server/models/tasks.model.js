const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
    required: true,
  },
  dateArchived: {
    type: Date,
    default: undefined,
    required: false,
    expires: 604800,
  },
});


module.exports = mongoose.model("Task", taskSchema);