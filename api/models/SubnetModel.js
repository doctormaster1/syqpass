const mongoose = require("mongoose");

const SubnetSchema = new mongoose.Schema({
  Name: {
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
  NetworkNo: {
    type: String,
    required: true,
    match:
      "(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}",
  },
  Mask: {
    type: String,
    required: true,
    match:
      "(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}",
  },
  Gateway: {
    type: String,
    required: true,
    match:
      "(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}",
  },
  VlanNo: {
    type: Number,
    required: true,
    min: 0,
    max: 4095,
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

const Subnet = mongoose.model("Subnet", SubnetSchema);
module.exports = Subnet;
