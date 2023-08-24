const mongoose = require("mongoose");

const PasswordSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 40,
  },
  Description: {
    type: String,
    required: true,
    maxlength: 200,
  },
  Ip: {
    type: String,
    required: true,
    match:
      "(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}",
  },
  ZoneId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Zone",
    required: true,
  },
  Username: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  Password: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Password = mongoose.model("Password", PasswordSchema);
module.exports = Password;
