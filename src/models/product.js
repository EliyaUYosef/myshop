const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  brand: {
    type: String,
    // required: true,
  },
  model: {
    type: String,
    // required: true,
  },
  type: {
    type: String,
    // required: true,
  },
  frame_material: {
    type: String,
    // required: true,
  },
  wheel_size: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
});
module.exports = mongoose.model("products", ProductSchema);
