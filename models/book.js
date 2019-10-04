const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  volumeInfo: {
    title: { type: String, required: true },
    authors: { type: String, required: true },
    previewLink: { type: String, required: true },
    description: { type: String, required: true },
    imageLinks: {
      thumbnail:  { type: String, required: true },
    }
  },
  id: String,
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
