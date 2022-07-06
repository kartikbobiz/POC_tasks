const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema(
  {
    name: {
      type: String,
      unique: true
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("roles", roleSchema);
