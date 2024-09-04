const express = require("express");
const app = express();
const cors = require("cors"); // Enables interaction with the frontend
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt"); // For hashing passwords
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

// MONGO_URL fetched from .env
const MongoURL = process.env.MONGO_URL;

// Connect to MongoDB
mongoose
  .connect(MongoURL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

// Define the User schema and model
const userSchema = new mongoose.Schema(
  {
    uName: { type: String, required: true },
    uPass: { type: String, required: true },
  },
  {
    collection: "users",
  }
);

const UserModel = mongoose.model("User", userSchema);

// Route to handle user registration
app.post("/signup", async (req, res) => {
  const { uName, uPass } = req.body;
  console.log("Received Data: ", uName, uPass);
  try {
    // Hash the password (using bcrypt)
    const hash = await bcrypt.hash(uPass, 10);

    // Create a new user document
    const newUser = new UserModel({
      uName,
      uPass: hash,
    });

    // Save the user to the database
    await newUser.save();

    res.status(200).json({ status: "Success", message: "User Created" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ status: "Error", message: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Listening at port: ${PORT}`));
