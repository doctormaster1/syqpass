const { DebugLogger } = require("../utils/Logger");
const { LogResult, ErrResult } = require("../helpers/Result");

const ErrorHandler = (err, req, res, next) => {
  DebugLogger.error(
    LogResult({
      error: err,
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    })
  );
  res.status(404).send(ErrResult(err));
  next();
};

module.exports = ErrorHandler;
