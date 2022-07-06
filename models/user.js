const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    role_id: {
      type: Schema.Types.ObjectId,
      ref: "Roles",
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("user", userSchema);
