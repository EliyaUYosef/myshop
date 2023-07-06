const mongoose = require("mongoose");
require("dotenv").config();

async function deleteCategoryId() {
  const uri = process.env.MONGO_URI;

  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDB");

    // Get the reference to the "products" collection
    const productsCollection = mongoose.connection.collection("products");

    // Update all documents to remove the "categoryId" field
    const updateResult = await productsCollection.updateMany(
      {},
      { $unset: { categoryId: 1 } }
    );

    console.log(`Updated ${updateResult.modifiedCount} documents`);
  } catch (err) {
    console.error(err);
  } finally {
    // Close the connection
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

deleteCategoryId();
