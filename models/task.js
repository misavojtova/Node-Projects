const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

// Task = collection name // schema = TaskSchema
module.exports = mongoose.model("Task", TaskSchema);
