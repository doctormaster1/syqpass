const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Auth = require("../models/AuthModel");
const config = require("../config/main.json").jwt;

const genToken = async (id) => {
  const accessToken = jwt.sign({ id }, config.secretKey, {
    expiresIn: config.exp,
  });

  const md5Hasher = crypto.createHmac("md5", config.secret);
  const hash = md5Hasher.update(accessToken).digest("hex");

  const refreshToken = jwt.sign({ hash }, config.secretKey, {
    expiresIn: config.refExp,
  });

  const uId = id;
  const token = { uId, accessToken, refreshToken };

  const test = await Auth.findOne({ uId: id });
  
  if (!test) {
    await Auth.create(token);
  } else {
    await Auth.findByIdAndUpdate(test.id, token);
  }

  return JSON.stringify(token);
};

module.exports = genToken;
