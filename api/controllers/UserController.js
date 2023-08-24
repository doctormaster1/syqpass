const asyncHandler = require("../helpers/AsyncHandler");
const {
  MsgResult,
  DataResult,
  ErrResult,
  LogResult,
} = require("../helpers/Result");
const { ApplicationLogger, DebugLogger } = require("../utils/Logger");
const UserModel = require("../models/UserModel");
const UserValidator = require("../validators/UserValidator");

const postUser = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const user = req.body.data;
  const validate = await UserValidator.validateAsync(user);
  if (validate.error) {
    return res.status(400).send(ErrResult(validate.error));
  }
  await UserModel.create(user).catch((err) => {
    return res.status(500).send(ErrResult(err));
  });
  res.status(200).send(MsgResult("Created User"));
});

const getUser = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const user = await UserModel.findById(req.params.id);
  if (!user) {
    return res.status(404).send(MsgResult("User Not Found"));
  }
  res.status(200).send(DataResult(user));
});

const deleteUser = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const user = UserModel.findById(req.params.id);
  if (!user) {
    return res.status(404).send(MsgResult("User Not Found"));
  }

  await user.remove().catch((err) => {
    return res.status(500).send(ErrResult(err));
  });
  res.status(204).send(MsgResult("Deleted User"));
});

const putUser = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const user = await UserModel.findById(req.params.id);
  if (!user) {
    return res.status(404).send(MsgResult("User Not Found"));
  }

  const validate = await UserValidator.validateAsync(req.body.data);
  if (validate.error) {
    return res.status(400).send(ErrResult(validate.error));
  }

  await UserModel.updateOne(req.params.id, req.body.data, {
    new: true,
    runValidators: true,
  }).catch((err) => {
    DebugLogger.error(LogResult(err));
    return res.status(500).send(ErrResult(err));
  });
  res.status(201).send(MsgResult("Updated User"));
});

module.exports = { postUser, getUser, deleteUser, putUser };
