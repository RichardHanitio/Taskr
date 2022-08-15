const mongoose = require("mongoose");

const connectDB = (url) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(
      url
      ,
      () => {
        resolve("Connected to DB...")
      },
      (err) => {
        reject(err);
      }
    );
  })
};

module.exports = connectDB;
