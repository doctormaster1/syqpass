const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendStatus(200);
  console.log("Api is Running");
});

app.listen(3000, () => {
  console.log("Api Server is Running");
});
