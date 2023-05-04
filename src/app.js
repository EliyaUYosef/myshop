const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    author: "Eliya",
  })
);
const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
};

const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const userRoutes = require("./routes/userRoutes");
// const addressRoutes = require("./routes/addressRoutes");
// const brandRoutes = require("./routes/brandRoutes");
// const categoryProcuctRoutes = require("./routes/categoryProcuctRoutes");
// const categoryRoutes = require("./routes/categoryRoutes");
// const orderProductRoutes = require("./routes/orderProductRoutes");
// const ratingRoutes = require("./routes/ratingRoutes");
// const userAddressRoutes = require("./routes/userAddressRoutes");
app.use(allowCrossDomain);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
// app.post("/api/products", productController.createProduct);

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

const db = require("./config/db"); // require the db module
