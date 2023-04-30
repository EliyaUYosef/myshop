const Product = require("../models/product");
// const mongoose = require("mongoose");

exports.showAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ Product: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to show products." });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = new Product({
      name,
      price,
      //   description,
    });
    const savedProduct = await product.save();
    res.status(201).json({ product: savedProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to create product." });
  }
};
