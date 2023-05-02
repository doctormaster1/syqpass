const mongoose = require("mongoose");

const PasswordSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Password = mongoose.model("Password", PasswordSchema);
module.exports = Password;
