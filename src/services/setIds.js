const { MongoClient } = require("mongodb");
const dbName = "myshop";
require("dotenv").config();

const uri = process.env.MONGO_URI;

async function connectToMongoDB() {
  const ids = [
    1, 2, 3, 4, 6, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 29,
  ];
  console.log("RUN");
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds
    });

    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection("todos");

    console.log(`Connected to MongoDB database: ${dbName}`);
    let array = [];
    for (let i = 0; i < ids.length; i++) {
      array.push({ id: ids[i] });
    }
    // Set the "id" field for each document using $set operator
    await collection.insertMany(array);

    console.log("Index created on the 'id' field in the 'todos' collection.");

    return db;
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
    throw error;
  }
}

connectToMongoDB();
