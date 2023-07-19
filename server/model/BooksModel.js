const mongoose = require("mongoose");
const BookShema = new mongoose.Schema(
  {
    BookId: Number,
    BookName: String,
    AuthorName: String,
    Available: Number,
    Borrow: Array,
  },
  { timestamps: true }
);

const BookList = mongoose.model("BookList", BookShema);
module.exports = BookList;
