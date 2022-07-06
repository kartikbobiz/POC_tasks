const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/middleware");
const { Apiresponse } = require("../utils/apiResponse");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  console.log(user);
  if (!user) {
    console.log("Inside first if");
    res.status(404).json(new Apiresponse(false, "User not found"));
  } else {
    console.log("Inside else");
    if (password) {
      const hashPassword = await bcrypt.hash(password, 10);
      const validPass = await bcrypt.compare(req.body.password, user.password);
      if (validPass) {
        const accessToken = generateToken(user);
        res.status(200).json(new Apiresponse(true, accessToken));
      }
    } else {
      res.status(400).json(new Apiresponse(false, "Unauthorised"));
    }
  }
};

module.exports = { login };
