const mongoose = require("mongoose");

const PasswordSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  catagory: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
  fqdn: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Password = mongoose.model("Password", PasswordSchema);
module.exports = Password;
