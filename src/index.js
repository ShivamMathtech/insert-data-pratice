const express = require("express");
const authRoute = require("./routes/authRoute/authRoute");
const app = express();
require("dotenv").config();

// Middeware to parse JSON request bodies
app.use(express.json());
app.use("/api", authRoute);
const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
