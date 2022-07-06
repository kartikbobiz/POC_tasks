require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bcrypt = require("bcryptjs");
const { hostname, port } = process.env;
const getAllUsers = require("./routes/getAllUsers");
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/project")
  .then(() => console.log("Connection Successful"));

app.use("/api/v1/users", getAllUsers);

app.listen(port, () => {
  console.log(`Server listening on ${hostname}:${port}`);
});
