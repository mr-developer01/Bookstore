const mongoose = require("mongoose");
const uri = "mongodb+srv://rahulpratik1212:rahul3636@books.q2v14.mongodb.net/bookstore?retryWrites=true&w=majority&appName=books";

const connectDb = async () => {
    try {
      await mongoose.connect(uri);
      console.log("Connected to db");
    } catch (err) {
      console.error("MongoDb Connection Error: ", err);
      process.exit(1);
    }
  };
  
  module.exports = connectDb;