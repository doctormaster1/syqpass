const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const genToken = require("../utils/genToken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Geçersiz karakterler!!!",
    ],
    unique: true,
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("remove", async function (next) {
  await this.model("Auth").deleteMany({ userId: this._id });
  next();
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const SaltFactor = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, SaltFactor);
  next();
});

UserSchema.methods.genAuthToken = function () {
  return genToken(this._id.toHexString());
};

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
