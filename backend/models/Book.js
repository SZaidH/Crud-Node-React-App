const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bTitle: { type: String, required: true },
    bAuthor: { type: String, required: true },
    bPrice: { type: Number, required: true },
  },
  {
    collection: "books",
  }
);

const BookModel = mongoose.model("Book", bookSchema);

module.exports = BookModel;
