const { Router } = require("express");

const {
  getRole,
  postRole,
  putRole,
  deleteRole,
  getZoneOfRole,
  getRoles,
} = require("../controllers/RoleController");

const router = Router();

router.route("/").get(getRoles).post(postRole);
router.route("/:id").get(getRole).delete(deleteRole).put(putRole);
router.route("/:id/zone").get(getZoneOfRole);

module.exports = router;
