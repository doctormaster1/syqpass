const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  Name: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    minlength: 3,
    maxlength: 15,
  },
  ZoneIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Zone",
      required: true,
    },
  ],
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Role = mongoose.model("Role", RoleSchema);
module.exports = Role;
