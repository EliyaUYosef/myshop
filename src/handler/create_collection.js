// node handler/create_collection.js "newCollectionName"
const { MongoClient } = require("mongodb");

async function createCollection(collectionName) {
  const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    const database = client.db();
    await database.createCollection(collectionName);
    console.log(`Collection ${collectionName} created successfully`);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

// usage: node handler/create_collection.js collection_name
const [, , collectionName] = process.argv;
createCollection(collectionName);
