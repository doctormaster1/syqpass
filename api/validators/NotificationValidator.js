const joi = require("joi");

const NotificationSchema = joi.object({
  Title: joi.string().min(3).max(30).required(),
  Message: joi.string().max(200).required(),
});

module.exports = NotificationSchema;
