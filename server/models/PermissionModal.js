const mongoose = require("mongoose");

const PermissionSchema = new mongoose.Schema({
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Permission = mongoose.model("Permission", PermissionSchema);
module.exports = Permission;
