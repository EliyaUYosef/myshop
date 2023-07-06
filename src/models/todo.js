const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  userId: {
    type: Number,
  },
});

module.exports = mongoose.model("todos", todoSchema);
