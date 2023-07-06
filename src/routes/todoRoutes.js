const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// router.get("/:todoId", todoController.getTodoById);

// // Update a product
router.put("/:todoId", todoController.updateTodo);

// // Delete a product
router.delete("/:todoId", todoController.deleteTodo);

// // Create a new product
router.post("/", todoController.createTodo);
// console.log("HERE !");
// Get all products with pagination, search query, limits, and order by
router.get("/:userId", todoController.getUserTodo);
router.get("/", todoController.showAllTodos);

module.exports = router;
