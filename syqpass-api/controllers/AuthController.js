const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/UserModel");
const Auth = require("../models/AuthModel");

const Login = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({
    name: req.body.name,
  }).select("+password");
  if (!user) throw res.status(401).send("Parola yanlıs");

  const isPassword = await user.matchPassword(req.body.password);
  if (!isPassword) throw res.status(401).send("Parola yanlış");

  sendTokenResponse(user, 200, res);
});

const sendTokenResponse = async (user, statusCode, res) => {
  await user.genAuthToken();
  const userData = {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const data = await Auth.findOne({ uId: user._id.toHexString() });
  const token = data;

  res.status(statusCode).send({ status: "success", token, authData: userData });
};

module.exports = Login;
