const asyncHandler = require("../helpers/AsyncHandler");
const {
  MsgResult,
  DataResult,
  ErrResult,
  LogResult,
} = require("../helpers/Result");
const { ApplicationLogger } = require("../utils/Logger");
const NotificationModel = require("../models/NotificationModel");
const NotificationValidator = require("../validators/NotificationValidator");

const postNotification = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const notification = req.body.data;
  const validate = await NotificationValidator.validateAsync(notification);

  if (validate.error) return res.status(400).send(ErrResult(validate.error));
  await NotificationModel.create(notification).catch((err) => {
    return res.status(500).send(ErrResult(err));
  });
  res.status(200).send(MsgResult("Created Notification"));
});

const getNotifications = asyncHandler(async (req, res, next) => {
  ApplicationLogger.info(
    LogResult({
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );

  const notifications = await NotificationModel.find();
  res.status(200).send(DataResult(notifications));
});

module.exports = { postNotification, getNotifications };
