const express = require("express");

const config = require("./config/main.json");
const mongoDb = require("./databases/Mongo");

const NotificationRouter = require("./routers/NotificationRouters");

const main = async () => {
  const app = express();

  await mongoDb();

  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(200).json({ message: "Api server is running" });
  });

  app.use("/api/notification", NotificationRouter);

  app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
  });
};

main();
