const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
// const addressRoutes = require("./routes/addressRoutes");
// const brandRoutes = require("./routes/brandRoutes");
// const categoryProcuctRoutes = require("./routes/categoryProcuctRoutes");
// const categoryRoutes = require("./routes/categoryRoutes");
// const orderProductRoutes = require("./routes/orderProductRoutes");
// const ratingRoutes = require("./routes/ratingRoutes");
// const userAddressRoutes = require("./routes/userAddressRoutes");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
// app.post("/api/products", productController.createProduct);

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

const db = require("./config/db"); // require the db module
