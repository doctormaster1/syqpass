const joi = require("joi");

const UserSchema = joi.object({
  Username: joi.string().min(4).max(40).required(),
  Password: joi.string().required(),
});

module.exports = UserSchema;
