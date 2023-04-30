// node handler/change_collection_name.js "oldCollectionName" "newCollectionName"
const { MongoClient } = require("mongodb");
const oldCollectionName = process.argv[2];
const newCollectionName = process.argv[3];

console.log(`oldCollectionName: ${param1}`);
console.log(`newCollectionName: ${param2}`);
async function renameCollection(oldCollectionName, newCollectionName) {
  const client = new MongoClient(process.env.MONGO_URI);

  try {
    // Connect to MongoDB Atlas
    await client.connect();

    // Get reference to the old collection
    const oldCollection = client.db().collection(oldCollectionName);

    // Rename the old collection to the new name
    await oldCollection.rename(newCollectionName);

    console.log(
      `Collection '${oldCollectionName}' renamed to '${newCollectionName}'`
    );
  } catch (err) {
    console.log(err.stack);
  } finally {
    // Close the connection
    await client.close();
  }
}
renameCollection(oldCollectionName, newCollectionName);
