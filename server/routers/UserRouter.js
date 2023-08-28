const { Router } = require("express");

const {
  postUser,
  getUser,
  deleteUser,
  putUser,
} = require("../controllers/UserController");

const router = Router();

router.route("/").post(postUser);
router.route("/:id").get(getUser).delete(deleteUser).put(putUser);

module.exports = router;
