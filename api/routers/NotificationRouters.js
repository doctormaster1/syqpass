const { Router } = require("express");

const {
  postNotification,
  getNotifications,
} = require("../controllers/NotificationController");

const router = Router();

router.route("/").get(getNotifications).post(postNotification);

module.exports = router;
