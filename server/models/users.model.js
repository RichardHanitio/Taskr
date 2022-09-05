const mongoose = require("mongoose");
require("mongoose-type-email");

const userSchema = new mongoose.Schema({
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true,
  },
  tasks: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Tasks" }],
});

module.exports = mongoose.model("User", userSchema);
