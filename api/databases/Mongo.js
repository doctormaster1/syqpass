const mongoose = require("mongoose");
const config = require("../config/main.json");

const { AuditLogger, DebugLogger } = require("../utils/Logger");
const { LogResult } = require("../helpers/Result");

const connectMongoDb = async () => {
  await mongoose
    .connect(config.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      AuditLogger.debug(LogResult(`MongoDB Connected`));
    })
    .catch((err) => {
      DebugLogger.error(LogResult(err));
    });
};

module.exports = connectMongoDb;
