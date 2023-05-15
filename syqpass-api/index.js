const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./database/mongo");

const unknownEndpoint = require("./middlewares/unknownEndpoint");
const errorHandler = require("./middlewares/errorHandler");

const AuthRoute = require("./routers/AuthRoute");
const PasswordRoute = require("./routers/PasswordRoute");

const app = express();

connectDB();

app.use(
  express.json({
    strict: false,
  })
);
app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());
app.use(helmet.dnsPrefetchControl());

app.use("/api", AuthRoute);
app.use("/api", PasswordRoute);

app.get("/", (req, res) => {
  res.sendStatus(200);
  console.log("Api is Running");
});

app.use(unknownEndpoint);
app.use(errorHandler);

app.listen(4000, () => {
  console.log("Api Server is Running");
});
