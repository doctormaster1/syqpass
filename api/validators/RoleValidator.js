const joi = require("joi");

const RoleSchema = joi.object({
  Name: joi.string().min(3).max(15).required().trim(),
});

module.exports = RoleSchema;
