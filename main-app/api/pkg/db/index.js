const mongoose = require("mongoose");
const config = require("../config").get;

const username = config("DB_USERNAME");
const password = config("DB_PASSWORD");
const database = config("DB_DATABASE");

const uri = `mongodb+srv://${username}:${password}@${database}.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri)

(async () => {
  try {
    await mongoose.connect(uri);
    console.log("Mongo DB connected");
  } catch (err) {
    throw new Error(err);
  }
})();