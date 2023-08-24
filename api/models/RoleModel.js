const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
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
