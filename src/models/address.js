const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
  house_number: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Address", AddressSchema);
