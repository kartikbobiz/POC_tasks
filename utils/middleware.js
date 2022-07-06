const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Role = require("../models/roles.model");
const { Apiresponse } = require("./apiResponse");

const generateToken = (user) => {
  return jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
};

const role = async (req, res, next) => {
  const userId =  req.headers.authorization.split(" ")[1]
  const decodedId = jwt.decode(userId);
  const user = await User.findById({ _id: decodedId._id });
  const roleId = user.role_id
  const roleCheck = await Role.findById({ _id: roleId });
  if (roleCheck.name == "superadmin" || roleCheck.name == "admin") {
    next();
  } else {
    res.status(400).json(new Apiresponse(false, "Unauthorised access"));
  }
};

module.exports = {
  generateToken,
  role,
};
