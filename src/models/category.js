const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  popular_models: {
    type: [String],
    required: true,
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
