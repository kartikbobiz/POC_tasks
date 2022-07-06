const jwt = require("jsonwebtoken");
const { Apiresponse } = require("./apiResponse");

const authToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    res.status(404).json(new Apiresponse(false, "Token not found"));
  } else {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  }
};

module.exports = {
  authToken,
};
