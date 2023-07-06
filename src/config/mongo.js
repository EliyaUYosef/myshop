const { MongoClient } = require("mongodb");
const dbName = "myshop";
const uri = process.env.MONGO_URI;

async function connectToMongoDB() {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds
    });

    await client.connect();

    const db = client.db(dbName);

    console.log(`${YELLOW}Connected to MongoDB database: ${dbName}`);

    return db;
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
    throw error;
  }
}

module.exports = connectToMongoDB;
