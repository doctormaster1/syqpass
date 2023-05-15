const asyncHandler = require("../utils/asyncHandler");
const Password = require("../models/PasswordModel");
const { NotFound } = require("../utils/notFound");

const createPassword = asyncHandler(async (req, res, next) => {
  const control = await Password.findOne({ title: req.body.title });
  if (control) throw res.status(400).send({ status: "error" });
  await Password.create(req.body);
  res.status(201).send({ status: "success" });
});

const getPassword = asyncHandler(async (req, res, next) => {
  const password = await Password.findById(req.params.passwordId);

  if (!password) throw NotFound(res);
  res.status(200).send({ status: "success", data: password });
});

module.exports = { createPassword };
