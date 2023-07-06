const mongoose = require("mongoose");
const dbName = "myshop";

const dbOptions = {
  dbName: dbName,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  serverSelectionTimeoutMS: 30000, // 30 seconds
};

const uri = process.env.MONGO_URI;
// console.log(process.env.MONGO_URI);
mongoose.connect(uri, dbOptions);

// mongoose.set("bufferCommands", false);
// mongoose.set("debug", true);
if (DB_DEBUG_MODE) {
  mongoose.set("debug", (collectionName, method, query, doc) => {
    if (!method.includes("Index") && !method.includes("count"))
      console.log(
        BLUE + `M - - > ${collectionName}.${method}` + RESET,
        JSON.stringify(query),
        doc
      );
  });
}

mongoose.connection.on("connected", () => {
  console.log(RED + `Connected to MongoDB database: ${CYAN}${dbName}` + RESET);
});

mongoose.connection.on("error", (err) => {
  console.log(RED + `MongoDB connection error: ${err}` + RESET);
});

module.exports = mongoose.connection;
