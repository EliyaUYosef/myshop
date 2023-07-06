const express = require("express");
require("./config/constants");
const bodyParser = require("body-parser");
require("dotenv").config();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const utils = require("./config/utils");
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

const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");

app.use(utils.allowCrossDomain);
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(utils.printIncomingRequestInfo);
app.use("/api/products", productRoutes);
app.use("/api/category/", productRoutes);

app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/todos", todoRoutes);

app.listen(port, () => {
  console.log(RED + `Server listening on port ${CYAN}` + port + RESET);
});

const db = require("./config/db"); // require the db module
