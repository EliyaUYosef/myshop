const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", (req, res, next) => {
  console.log("productRoute.js - GET METHOD");
  next();
});
router.get("/:categoryId", (req, res) => {
  // console.log(req);
  if (Object.keys(req.params.categoryId).length > 0) {
    productController.getProductsByCategory(req, res);
  } else {
    return productController.showAllProductsCustom(req, res);
  }
});
router.get("/", productController.showAllProductsCustom);

// router.get("/:categoryId", productController.getProductsByCategory);

// Update a product
router.put("/:productId", productController.updateProduct);

// Delete a product

// Create a new product
router.post("/", productController.createProduct);

// Get products by category ID

// Get all products with pagination, search query, limits, and order by
router.delete("/:productId", productController.deleteProductById);

module.exports = router;
