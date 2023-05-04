const Product = require("../models/product");
const mongoose = require("mongoose");

exports.showAllProducts = async (req, res) => {
  try {
    const products = await Product.findOne({});
    res.status(200).json({ Product: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to show products." });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { brand, model, type, wheel_size, frame_material, price } = req.body;
    const product = new Product({
      brand,
      model,
      type,
      wheel_size,
      frame_material,
      price,
    });
    const savedProduct = await Product.save();
    res.status(201).json({ product: savedProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to create product." });
  }
};

exports.getProductById = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    res.json({ product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to get product." });
  }
};

exports.updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { brand, model, type, wheel_size, frame_material, price } = req.body;

  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      { brand, model, type, wheel_size, frame_material, price },
      { new: true, useFindAndModify: false }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    res.json({ product: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to update product." });
  }
};

exports.deleteProductById = async (req, res) => {
  const { productId } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    res.json({ message: "Product deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to delete product." });
  }
};

exports.showAllProductsCustom = async (req, res) => {
  const {
    page = 1,
    limit = 10,
    sort = "createdAt",
    order = "desc",
  } = req.query;
  const skip = (page - 1) * limit;

  const sortOption = { [sort]: order === "asc" ? 1 : -1 };

  try {
    const products = await Product.find({})
      .sort(sortOption)
      .skip(skip)
      .limit(parseInt(limit));
    const count = await Product.countDocuments({});

    res.json({
      page,
      limit,
      total_pages: Math.ceil(count / limit),
      total_items: count,
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to get products." });
  }
};
