const { Router } = require("express");

const {
  getZone,
  getZones,
  postZone,
  putZone,
  deleteZone,
} = require("../controllers/ZoneController");

const router = Router();

router.route("/").get(getZones).post(postZone);
router.route("/:id").get(getZone).put(putZone).delete(deleteZone);

module.exports = router;
