const Router = require("express").Router;
const {
  createPassword,
  getPasswords,
} = require("../controllers/PasswordController");
const router = Router();

router.route("/passwords").get(getPasswords);
router.route("/password").post(createPassword);

module.exports = router;
