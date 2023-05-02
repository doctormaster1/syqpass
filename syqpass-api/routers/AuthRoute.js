const Router = require("express").Router;
const Login = require("../controllers/AuthController");
const router = Router();

router.route("/login").post(Login);

module.exports = router;
