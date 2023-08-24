const asyncHandler = require("../helpers/AsyncHandler");
const { MsgRes, DataRes, ErrRes } = require("../helpers/CustomResponse");
const NotificationModel = require("../models/NotificationModel");
const NotificationValidator = require("../validators/NotificationValidator");

const postNotification = asyncHandler(async (req, res, next) => {
  const notification = req.body.data;
  const validate = await NotificationValidator.validateAsync(notification);

  if (validate.error) return res.status(400).send(ErrRes(validate.error));
  await NotificationModel.create(notification).catch((err) => {
    return res.status(500).send(ErrRes(err));
  });
  return res.status(200).send(MsgRes("Created Notification"));
});

const getNotifications = asyncHandler(async (req, res, next) => {
  const notifications = await NotificationModel.find();
  res.status(200).send(DataRes(notifications));
});

module.exports = { postNotification, getNotifications };
