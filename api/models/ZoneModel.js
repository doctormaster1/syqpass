const mongoose = require("mongoose");

const ZoneSchema = new mongoose.Schema({
  Name: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  Description: {
    type: String,
    required: true,
    maxlength: 200,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

ZoneSchema.pre("remove", async function (next) {
  await this.model("Device").deleteMany({ ZoneId: this._id });
  await this.model("Password").deleteMany({ ZoneId: this._id });
  await this.model("Subnet").deleteMany({ ZoneId: this._id });
  next();
});

const Zone = mongoose.model("Zone", ZoneSchema);
module.exports = Zone;
