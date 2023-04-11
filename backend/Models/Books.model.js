const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Auther: { type: String, required: true },
  Publisher: { type: String, required: true },
  Description: { type: String, required: true },
  Pages: { type: Number, required: true },
});

const BookModel = mongoose.model("book", bookSchema);

module.exports = {
  BookModel,
};
