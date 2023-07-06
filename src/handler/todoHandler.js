const connectToMongoDB = require("../config/mongo");

async function createOne(newDoc) {
  const db = await connectToMongoDB();
  console.log("createOne");
  let result;
  if (newDoc.title != "") {
    const collection = await db.collection("todos");
    result = await collection.insertMany([newDoc]);

    return result.insertedCount > 0;
  }

  return false;
}

async function deleteTodo(id = 0) {
  if (!id) return false;
  const db = await connectToMongoDB();
  const collection = await db.collection("todos");
  const query = await collection.deleteMany({ todoId: id });
  return query.deletedCount > 0 ? true : false;
}

async function getAll(userId) {
  const db = await connectToMongoDB();
  const collection = await db.collection("todos");
  const query = await collection
    .find({ userId: parseInt(userId) })
    .sort({ id: 1 });
  const result = await query.toArray();
  return result.length > 0 ? result : [];
}
async function updateAndReturnTodo(reqTodoId, reqTodo) {
  const db = await connectToMongoDB();
  const collection = await db.collection("todos");
  const updateResult = await collection.findOneAndUpdate(
    { todoId: reqTodoId },
    { $set: reqTodo },
    {
      new: true,
      useFindAndModify: false,
    }
  );

  return updateResult;
}
module.exports = {
  getAll: getAll,
  createOne: createOne,
  deleteTodo: deleteTodo,
  updateAndReturnTodo: updateAndReturnTodo,
};
