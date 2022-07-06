const Roles = require("../models/roles.model");
const { Apiresponse } = require("../utils/apiResponse");

const getCount = async (req, res) => {
  try {
    const userId =  req.headers.authorization.split(" ")[1]
    console.log(userId)
    const student = await Roles.count({ name: "student" });
    const superAdmin = await Roles.count({ name: "superAdmin" });
    const admin = await Roles.count({ name: "admin" });

    res.status(200).json(new Apiresponse(true, { student, superAdmin, admin }));
  } catch {
    res.status(400).json(new Apiresponse(false, "Bad request"));
  }
};

module.exports = {
  getCount,
};
