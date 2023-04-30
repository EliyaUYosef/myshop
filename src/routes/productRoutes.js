const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// console.log("productRoutes.js:4");

// Update a product
// router.put("/:productId", productController.updateProduct);

// Get all products with pagination, search query, limits, and order by
router.get("/", productController.showAllProducts);

// Create a new product
// router.post("/", productController.createProduct);

module.exports = router;
