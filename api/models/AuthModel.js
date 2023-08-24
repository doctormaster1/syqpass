const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  AccessToken: {
    type: String,
    required: true,
  },
  RefreshToken: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Auth = mongoose.model("Auth", AuthSchema);
module.exports = Auth;
