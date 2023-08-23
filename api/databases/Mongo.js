const mongoose = require("mongoose");
const config = require("../config/main.json");

const connectMongoDb = async () => {
  await mongoose
    .connect(config.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectMongoDb;
