const asyncHandler = require("../helpers/AsyncHandler");
const {
  MsgResult,
  DataResult,
  ErrResult,
  LogResult,
} = require("../helpers/Result");
const { ApplicationLogger, DebugLogger } = require("../utils/Logger");
const RoleModel = require("../models/RoleModel");
const RoleValidator = require("../validators/RoleValidator");

const postRole = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const role = req.body.data;
  const validate = await RoleValidator.validateAsync(role);
  if (validate.error) {
    return res.status(400).send(ErrResult(validate.error));
  }
  await RoleModel.create(role).catch((err) => {
    DebugLogger.error(LogResult(err));
    return res.status(500).send(ErrResult(err));
  });
  res.status(200).send(MsgResult("Created Role"));
});

const getRole = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const role = await RoleModel.findById(req.params.id);
  if (!role) {
    return res.status(404).send(MsgResult("Role Not Found"));
  }
  res.status(200).send(DataResult(role));
});

const getRoles = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const roles = await RoleModel.find();
  res.status(200).send(DataResult(roles));
});

const getZoneOfRole = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const role = await RoleModel.findById(req.params.id);
  if (!role) {
    return res.status(404).send(ErrResult("Role Not Found"));
  }
  res.status(200).send(DataResult(role.ZoneIds));
});

const deleteRole = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const role = await RoleModel.findById(req.params.id);
  if (!role) {
    return res.status(404).send(MsgResult("Role Not Found"));
  }

  await role.remove().catch((err) => {
    return res.status(500).send(ErrResult(err));
  });
  res.status(204).send(MsgResult("Deleted Role"));
});

const putRole = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const role = await RoleModel.findById(req.params.id);
  if (!role) {
    return res.status(404).send(MsgResult("Role Not Found"));
  }

  const validate = await RoleValidator.validateAsync(req.body.data);
  if (validate.error) {
    return res.status(400).send(ErrResult(validate.error));
  }

  await RoleModel.updateOne(req.params.id, req.body.data, {
    new: true,
    runValidators: true,
  }).catch((err) => {
    DebugLogger.error(LogResult(err));
    return res.status(500).send(ErrResult(err));
  });
  res.status(201).send(MsgResult("Updated Role"));
});

module.exports = {
  getRole,
  postRole,
  putRole,
  deleteRole,
  getZoneOfRole,
  getRoles,
};
