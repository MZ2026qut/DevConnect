// config/db.js
const mongoose = require("mongoose");

mongoose.set('strictQuery', false); 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      family: 4 // Forces standard IPv4 routing
    });  
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;