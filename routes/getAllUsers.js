const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/getUsers");
const { getCount } = require("../controllers/getCountOfUsers");
const { login } = require("../controllers/login");
const { authToken } = require("../utils/authentication");
const { role } = require("../utils/middleware")


router.get("/",authToken, role, getUsers);

router.get("/role/count",authToken, role, getCount);

router.post("/login", login);

module.exports = router;
