const express = require("express");
require("./config/constants");

const bodyParser = require("body-parser");
require("dotenv").config();
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 3030;

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
  // res.header("Access-Control-Allow-Headers", "Content-Type");
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
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(GREEN + "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<" + RESET);
  console.log(GREEN + "App.js - - - method:" + RESET, req.method);
  console.log(GREEN + "Received a request at" + RESET, new Date());
  console.log(GREEN + "Request path:" + RESET, req.path);
  console.log(GREEN + ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + RESET);
  next();
});

app.use("/api/products", productRoutes);
app.use("/api/category/", productRoutes);

app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
// app.post("/api/products", productController.createProduct);

app.listen(port, () => {
  console.log(RED + `Server listening on port ${CYAN}` + port + RESET);
});

const db = require("./config/db"); // require the db module
