const db = require("../config/mongo");

async function getUserByField(findUser) {
  try {
    const collection = await db().collection("users");
    const query = await collection.find(findUser);
    const tempUser = await query.toArray();
    const user = tempUser[0];

    if (user?.phone == undefined) return false;

    return user;
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = {
  getUserByField: getUserByField,
};
