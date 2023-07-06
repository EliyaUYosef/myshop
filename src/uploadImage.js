require("./config/constants");
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/db"); // Assuming you have the MongoDB connection setup in db.js
const mediaModel = require("./models/media"); // Assuming you have the Media model defined in media.js
const fileUpload = require("express-fileupload");

// Middleware to enable CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable file uploads
app.use(fileUpload());

// POST request endpoint to receive the files
app.post("/upload/", async (req, res) => {
  if (!req.files || !req.body.productId) {
    return res
      .status(400)
      .json({ message: "Please provide files and a productId" });
  }

  const productId = req.body.productId;
  const files = Array.isArray(req.files.file)
    ? req.files.file
    : [req.files.file];

  try {
    const uploadedFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const extension = path.extname(file.name);
      const randomNumber = Math.floor(Math.random() * 1001); // Generates a random integer between 0 and 1000 (inclusive)

      const timestamp = Math.floor(Date.now() / 1000);

      // Check if the filename already exists

      let isUnique = false;
      let counter = 1;
      const newFilename = `${productId}_${timestamp}(${randomNumber})${extension}`;
      let finalFilename = newFilename;
      while (!isUnique) {
        const existingMedia = await mediaModel.findOne({
          filepath: finalFilename,
        });
        if (existingMedia) {
          // Generate a new filename with a counter
          finalFilename = `${productId}_${timestamp}_${counter}${extension}`;
          counter++;
        } else {
          isUnique = true;
        }
      }

      // Create the product directory if it doesn't exist
      const productDirectory = path.join(
        __dirname,
        "media/products",
        productId
      );
      if (!fs.existsSync(productDirectory)) {
        fs.mkdirSync(productDirectory);
      }

      // Save the file to the product directory
      const uploadPath = path.join(productDirectory, finalFilename);
      file.mv(uploadPath);

      // Create a new media document in MongoDB
      const media = new mediaModel({
        productId,
        filepath: productId + "/" + finalFilename,
      });
      await media.save();

      console.log("File saved successfully:", finalFilename);
      uploadedFiles.push(finalFilename);
      setTimeout(() => {
        if (CODE_DEBUG_MODE) {
          console.log(GREEN + finalFilename + " is uploaded " + RESET);
        }
      }, 4000);
    }

    res
      .status(200)
      .json({ message: "Files saved successfully", files: uploadedFiles });
  } catch (error) {
    console.error("Error uploading files:", error);
    res.status(500).json({ message: "Failed to upload files" });
  }
});

// Start the server
const port = 4444;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
