const mongoose = require('mongoose');
const moment = require("moment");

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
    default : Date.now,
    required : true
  },
  dateArchived : {
    type: Date,
    default : undefined,
    required: false
  }
})

// taskSchema.methods.deleteArchiveOnDateArchived = async function() {
//   const thirtyDaysAgoToday = moment().subtract(10, "days").format("L");
//   const dateArchived = this.dateArchived.format("L");
//   if(thirtyDaysAgoToday === dateArchived) {
//     await this.findOneAndDelete({_id: this._id});
//   }
//   console.log("yo");
// }

module.exports = mongoose.model("Task", taskSchema);