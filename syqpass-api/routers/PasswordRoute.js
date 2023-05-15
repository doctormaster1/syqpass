const Router = require("express").Router;
const { createPassword } = require("../controllers/PasswordController");
const router = Router();

router.route("/password").post(createPassword);

module.exports = router;
