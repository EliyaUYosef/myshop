const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// console.log("userRoutes.js:4");

// Update a user
// router.put("/:userId", userController.updateUser);

// Get all users with pagination, search query, limits, and order by
router.get("/", userController.showAllUsers);

// Create a new user
// router.post("/", userController.createUser);

module.exports = router;
