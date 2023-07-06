const { MongoClient } = require("mongodb");
const dbName = "myshop";
require("dotenv").config();

const uri = process.env.MONGO_URI;

async function connectToMongoDB() {
  const ids = [3, 4, 6, 5, 7, 8, 9, 10];
  console.log("RUN");
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds
    });

    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection("unUsedIds");

    console.log(`Connected to MongoDB database: ${dbName}`);
    let array = [];
    for (let i = 0; i < ids.length; i++) {
      array.push({ id: ids[i] });
    }
    // Set the "id" field for each document using $set operator
    let a = {};
    // for (let j = 0; j < ids.length; j++) {
    a = await collection.insertMany(array);
    // }

    console.log(
      "Index created on the 'id' field in the 'todos' collection.",
      a
    );

    return db;
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
    throw error;
  }
}

connectToMongoDB();
