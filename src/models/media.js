const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      // required: true,
    },
    filepath: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

MediaSchema.index({
  productId: "text",
  filepath: "text",
});

module.exports = mongoose.model("Media", MediaSchema);
