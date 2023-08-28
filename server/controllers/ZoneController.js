const asyncHandler = require("../helpers/AsyncHandler");
const {
  MsgResult,
  DataResult,
  ErrResult,
  LogResult,
} = require("../helpers/Result");
const { ApplicationLogger, DebugLogger } = require("../utils/Logger");
const ZoneModel = require("../models/ZoneModel");
const ZoneValidator = require("../validators/ZoneValidator");

const postZone = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const zone = req.body.data;
  const validate = await ZoneValidator.validateAsync(zone);
  if (validate.error) {
    return res.status(400).send(ErrResult(validate.error));
  }
  await ZoneModel.create(zone).catch((err) => {
    DebugLogger.error(LogResult(err));
  });
  res.status(200).send(MsgResult("Created Zone"));
});

const getZone = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const zone = await ZoneModel.findById(req.params.id);
  if (!role) {
    return res.status(404).send(MsgResult("Role Not Found"));
  }
  res.status(200).send(DataResult(zone));
});

const getZones = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const zone = await ZoneModel.find();
  res.status(200).send(DataResult(zone));
});

const deleteZone = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const zone = await ZoneModel.findById(req.params.id);
  if (!zone) {
    return res.status(404).send(MsgResult("Zone Not Found"));
  }

  await zone.remove().catch((err) => {
    return res.status(500).send(ErrResult(err));
  });
  res.status(204).send(MsgResult("Deleted Zone"));
});

const putZone = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const zone = await ZoneModel.findById(req.params.id);
  if (!zone) {
    return res.status(404).send(MsgResult("Zone Not Found"));
  }

  const validate = await ZoneModel.validateAsync(req.body.data);
  if (validate.error) {
    return res.status(400).send(ErrResult(validate.error));
  }

  await ZoneModel.updateOne(req.params.id, req.body.data, {
    new: true,
    runValidators: true,
  }).catch((err) => {
    DebugLogger.error(LogResult(err));
    return res.status(500).send(ErrResult(err));
  });
  res.status(201).send(MsgResult("Updated Zone"));
});

module.exports = { postZone, getZone, getZones, deleteZone, putZone };
