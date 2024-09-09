const express = require("express");
const app = express();
const cors = require("cors"); // Enables interaction with the frontend
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt"); // For hashing passwords
const jwt = require("jsonwebtoken");
const connectDB = require("./db");
const UserModel = require("./models/User");
const BookModel = require("./models/Book");
const PORT = process.env.EXPRESS_PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET

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

    // Generate JWT token after successful signup
    const token = jwt.sign({ id: newUser._id, uName: newUser.uName }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ status: "Success", message: "User Created", token });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ status: "Error", message: "Internal Server Error" });
  }
});

// Route to handle User login
app.post("/login", async (req, res) => {
  const { uName, uPass } = req.body;

  try {
    const user = await UserModel.findOne({ uName });
    if (!user) return res.status(404).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(uPass, user.uPass);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // JWT token generated with the secret key from .env
    const token = jwt.sign({ id: user._id, uName: user.uName }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
})

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

    res.status(200).json({ status: "Success", message: "Book Created" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ status: "Error", message: "Internal Server Error" });
  }
});

// Route to handle GET requests for all books
app.get("/books", async (req, res) => {
  try {
    const books = await BookModel.find().sort({ _id: -1 });
    res.json(books);
    console.log("GET: All Books");
  } catch (error) {
    console.error("Error: ", error);
  }
});

// Route to fetch the Book details and update it
app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { bTitle, bAuthor, bPrice } = req.body;

  try {
    const updatedBook = await BookModel.findByIdAndUpdate(
      id,
      { bTitle, bAuthor, bPrice },
      { new: true }
    );

    if (!updatedBook) {
      return res
        .status(404)
        .json({ status: "Error", message: "Book not found" });
    }

    res
      .status(200)
      .json({ status: "Success", message: "Book updated", updatedBook });
  } catch (error) {
    console.log("Error updating book: ", error);
    res.status(500).json({ status: "Error", message: "Internal Server Error" });
  }
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  // Check if the ID is valid (assuming you use MongoDB)
  if (!id) {
    return res.status(404).json({ status: "Error", message: "Book ID not found" });
  }

  try {
    const deletedBook = await BookModel.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ status: "Error", message: "Book not found" });
    }

    res.status(200).json({ status: "Success", message: "Book deleted", deletedBook });
  } catch (error) {
    console.log("Error deleting book: ", error);
    res.status(500).json({ status: "Error", message: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Listening at port: ${PORT}`));
