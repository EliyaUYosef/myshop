const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
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
      type: String,
      // required: true,
    },
    categories_id: {
      type: Array,
    },
  },
  { timestamps: true }
);

ProductSchema.index({
  brand: "text",
  model: "text",
  type: "text",
  wheel_size: "text",
  frame_material: "text",
  price: "text",
});

module.exports = mongoose.model("Product", ProductSchema);
