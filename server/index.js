const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const userRouter = require("./routes/user.routes");

// Middleware Connections
app.use(cors());
app.use(express.json());

// Routes
app.use("/user", userRouter);

// Connection
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // Mongo DB Connections
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then((response) => {
      console.log("MongoDB Connection Succeeded.");
    })
    .catch((error) => {
      console.log("Error in DB connection: " + error);
    });
});
