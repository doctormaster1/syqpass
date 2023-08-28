const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 40,
  },
  Password: {
    type: String,
    required: true,
  },
  IsAD: {
    type: Boolean,
    required: true,
    default: false,
  },
  Role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    required: true,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("remove", async function (next) {
  await this.model("Auth").deleteMany({ UserId: this._id });
  next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
