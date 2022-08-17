const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task : {
    type : String,
    required: true
  },
  desc : {
    type: String,
  },
  dueDate: {
    type: Date,
    required: true
  },
  priority : {
    type: String,
    required: true
  },
  dateCreated : {
    type: Date,
    default : Date.now()
  }
})

module.exports = mongoose.model("Task", taskSchema);