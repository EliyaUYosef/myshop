const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Get a single product by ID
router.get("/:productId", productController.getProductById);

// Update a product
router.put("/:productId", productController.updateProduct);

// Delete a product
router.delete("/:productId", productController.deleteProductById);

// Create a new product
router.post("/", productController.createProduct);

// Get all products with pagination, search query, limits, and order by
// router.get("/", productController.showAllProductsCustom);
router.get("/", productController.showAllProductsCustom);

module.exports = router;
