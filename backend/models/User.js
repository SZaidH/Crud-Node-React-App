const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    uName: { type: String, required: true },
    uPass: { type: String, required: true },
  },
  {
    collection: "users",
  }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
