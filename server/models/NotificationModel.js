const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  Message: {
    type: String,
    required: true,
    maxlength: 200,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Notification = mongoose.model("Notification", NotificationSchema);
module.exports = Notification;
