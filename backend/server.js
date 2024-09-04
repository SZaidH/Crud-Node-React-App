const express = require("express");
const app = express();
const cors = require("cors"); // Enables interaction with the frontend
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt"); // For hashing passwords
const connectDB = require("./db");
const UserModel = require("./models/User");
const BookModel = require("./models/Book");
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

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

// Route to handle Adding Books
app.post("/create", async (req, res) => {
  const { bTitle, bAuthor, bPrice } = req.body;
  console.log("Recieved Data: ", bTitle, bAuthor, bPrice);

  try {
    // Create a new book document
    const newBook = new BookModel({
      bTitle,
      bAuthor,
      bPrice,
    });

    // Save the user to the database
    await newBook.save();

    res.status(200).json({ status: "Success", message: "User Created" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ status: "Error", message: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Listening at port: ${PORT}`));
