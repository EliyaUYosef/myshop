const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  founded: {
    type: Number,
    required: true,
  },
  headquarters: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  popular_models: {
    type: [String],
    required: true,
  },
  founder: {
    type: String,
    required: true,
  },
  parent_company: {
    type: String,
  },
  num_employees: {
    type: Number,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Brand", BrandSchema);
