const userController = require("../controllers/userController");

exports.getUser = async (req, res, next) => {
  try {
    console.log(req.user);
    // const phone = "+972525676077";
    // const user = await userController.getUserByField(phone);
    return res.status(200).json({ key: "value" });
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
};
