const NotFound = (res) =>
  res.status(404).send({ status: "fail", message: "Not Found" });

module.exports = NotFound;
