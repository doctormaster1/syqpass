const mongoose = require("mongoose");
const connectDb = require("../database/mongo");
const User = require("../models/UserModel");

const data = {
  name: "admin",
  email: "vardibile@tutanota.com",
  password: "Password1!",
  role: "admin",
};

const seedData = async () => {
  connectDb();
  try {
    await User.create(data);
    console.log("Create seed data");
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

seedData();
