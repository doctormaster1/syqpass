const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
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
  Brand: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 40,
  },
  Model: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 40,
  },
  SerialNo: {
    type: String,
  },
  ZoneId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Zone",
    required: true,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Device = mongoose.model("Device", DeviceSchema);
module.exports = Device;
