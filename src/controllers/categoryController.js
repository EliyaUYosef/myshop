const Category = require("../models/category");
const mongoose = require("mongoose");

exports.showAllCategories = async (req, res) => {
  try {
    console.log("showAllCategories");
    const categories = await Category.find({});
    res.status(200).json({ categories });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to show categories." });
  }
};
