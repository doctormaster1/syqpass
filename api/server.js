const express = require("express");

const { AuditLogger, ApplicationLogger } = require("./utils/Logger");
const { LogResult } = require("./helpers/Result");
const ErrorHandler = require("./middlewares/ErrorHandler");

const config = require("./config/main.json");
const mongoDb = require("./databases/Mongo");

const NotificationRouter = require("./routers/NotificationRouter");
const UserRouter = require("./routers/UserRouter");

const main = async () => {
  const app = express();

  await mongoDb();

  app.use(express.json());

  app.get("/api", (req, res) => {
    ApplicationLogger.info(
      LogResult({
        url: req.originalUrl,
        method: req.method,
        ip: req.ip,
      })
    );
    res.status(200).json({ message: "Api server is running" });
  });

  app.use("/api/notification", NotificationRouter);
  app.use("/api/user", UserRouter);

  app.use(ErrorHandler);

  app.listen(config.PORT, () => {
    AuditLogger.debug(
      LogResult({ message: `Server is running on port ${config.PORT}` })
    );
  });
};

main();
