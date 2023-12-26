const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const { AuditLogger, ApplicationLogger } = require("./utils/Logger");
const { LogResult } = require("./helpers/Result");
const ErrorHandler = require("./middlewares/ErrorHandler");

const config = require("./config/main.json");
const mongoDb = require("./databases/Mongo");

const DashboardRouter = require("./routers/");
const NotificationRouter = require("./routers/NotificationRouter");
const UserRouter = require("./routers/UserRouter");
const RoleRouter = require("./routers/RoleRouter");
const ZoneRouter = require("./routers/ZoneRouter");

const main = async () => {
  const app = express();

  await mongoDb();

  app.use(express.json());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(hpp({ whitelist: ["search"] }));
  app.use(helmet());
  app.use(cors({ origin: "pass.syqpass.com" }));

  app.use("/", DashboardRouter);

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
  app.use("/api/role", RoleRouter);
  app.use("/api/zone", ZoneRouter);

  app.use(ErrorHandler);

  app.listen(config.PORT, () => {
    AuditLogger.debug(
      LogResult({ message: `Server is running on port ${config.PORT}` })
    );
  });
};

main();
