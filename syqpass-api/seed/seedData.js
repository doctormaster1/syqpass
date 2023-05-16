const mongoose = require("mongoose");
const connectDb = require("../database/mongo");
const User = require("../models/UserModel");
const Pass = require("../models/PasswordModel");

const user = {
  username: "admin",
  mail: "vardibile@tutanota.com",
  password: "Password1!",
  role: "admin",
};

const pass = {
  title: "idrac",
  catagory: "server",
  ip: "192.168.1.3",
  fqdn: "idrac.syqpass.local",
  type: "server",
  username: "root",
  password: "Password123!",
};

const seedData = async () => {
  connectDb();
  try {
    //await User.create(user);
    await Pass.create(pass);
    console.log("Create seed data");
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

seedData();
