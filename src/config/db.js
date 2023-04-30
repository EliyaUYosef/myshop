const mongoose = require("mongoose");
const dbName = "myshop";

const dbOptions = {
  dbName: dbName,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

const uri = process.env.MONGO_URI;
mongoose.connect(uri, dbOptions);

mongoose.set("debug", (collectionName, method, query, doc) => {
  console.log(
    `M - - > ${collectionName}.${method}`,
    JSON.stringify(query),
    doc
  );
});

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB database: ${dbName}`);
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

module.exports = mongoose.connection;
