const jwt = require("jsonwebtoken");
const createError = require("./error");

const verifyToken = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    if (error.name === "TokenExpiredError")
      throw createError(401, "Token geçersiz");
    throw error;
  }
};

module.exports = verifyToken;
