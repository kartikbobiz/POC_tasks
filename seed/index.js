const data = [
  {
    first_name: "tanish",
    last_name: "kumaer",
    email: "test@gmail.com",
    password: "haskjf",
  },
];

const mongoose = require("mongoose");
const User = require("../models/user");
const Roles = require("../models/roles.model");

mongoose
  .connect("mongodb://localhost:27017/project")
  .then(() => console.log("Connection Successful"));

const saveRole = async (role) => {
  const newRole = new Roles(role);
  return await newRole.save();
};

const saveUser = async (user) => {
  const newUser = new User(user);
  await newUser.save();
};

const populate = async () => {
    try{
  const r1 = await saveRole({ name: "student" });
  const r2 = await saveRole({ name: "admin" });

  const u1 = await saveUser({
    first_name: "tanish",
    last_name: "kumare",
    role_id: r1,
    email: "test@123.com",
    password: "hakjdha",
  });

  const u2 = await saveUser({
    first_name: "dev",
    last_name: "manush",
    role_id: r2,
    email: "admin@123.com",
    password: "User",
  })
  
} catch(err){
    console.log(err)
}
};

populate();
