const joi = require("joi");

const ZoneSchema = joi.object({
  Name: joi.string().min(3).max(50).required().trim(),
  Description: joi.string().max(200).required(),
});

module.exports = ZoneSchema;
