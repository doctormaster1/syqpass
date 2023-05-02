const mongoose = require("mongoose");
const dbUrl = require("../config/main.json").database.mongo;

const connectDB = async () => {
  await mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(`${err}`));
};

module.exports = connectDB;
