const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  uId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  accessToken: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
});

const Auth = mongoose.model("Auth", AuthSchema);
module.exports = Auth;
