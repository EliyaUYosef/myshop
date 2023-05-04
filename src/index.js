const { MongoClient } = require("mongodb");

async function getAllBicycles(limit = 1, collection_name = "Product") {
  const uri = process.env.MONGO_URI;
  const client = await MongoClient.connect(uri, { useUnifiedTopology: true });

  const db = client.db("myshop");
  const collection = db.collection(collection_name);

  let query = collection.find({});

  if (limit > 0) {
    query = query.limit(limit);
  }

  const result = await query.toArray();

  client.close();
  console.log(result);
  return result;
}

getAllBicycles(1, "Brand").catch(console.dir);
