const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/:userId", userController.getUserById);

// Update a product
router.put("/:userId", userController.updateUser);

// Delete a product
router.delete("/:userId", userController.deleteUser);

// Create a new product
router.post("/", userController.createUser);

// Get all products with pagination, search query, limits, and order by
router.get("/", userController.showAllUsers);

module.exports = router;
