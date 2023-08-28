const express = require("express");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const fs = require("fs");

const router = express.Router();

router.use(
  "/dashboard",
  express.static(path.join(__dirname, "../../client/dist"))
);

router.get("login", (req, res) => {
  const location = path.join(__dirname, "../../client/dist/index.html");
  const html = fs.readFileSync(location, "utf-8");
  const reactApp = React.createElement(require("?"));
  const appHtml = ReactDOMServer.renderToString(reactApp);
  const finalHtml = html.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  res.send(finalHtml);
});

module.exports = router;
