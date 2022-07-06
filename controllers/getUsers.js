const User = require("../models/user");
const Roles = require("../models/roles.model")
const { Apiresponse } = require("../utils/apiResponse");

const getUserByRole = async (role) => {
    try {
      const users = await Roles.find({ name: `${role}` });
      let role_id;
      for await(const user of users) {
          role_id = await User.find({ role_id: user._id });
          return role_id;
      }
      return role_id
    } catch (error) {
      return error
    }
  
};

const getUsers = async (req, res) => {
  const role = req.query.role;
  if (role) {
    const roleWiseResult = await getUserByRole(role)
    res.status(200).json(new Apiresponse(true, { users: roleWiseResult[0] }));
  } else {
    try {
      const result = await User.find();
      res.status(200).json(new Apiresponse(true, { users: result }));
    } catch {
      res.status(400).json(new Apiresponse(false, "Bad request"));
    }
  }
};

module.exports = {
  getUsers
};
