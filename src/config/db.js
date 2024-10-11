const mongoose = require("mongoose");
require("dotenv").config();
// Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PSWD}@cluster0.4lh7n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then((d) => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB...", err);
  });

// Define a schema for User

// Create a model using the schema
exports.mongoose = mongoose;
