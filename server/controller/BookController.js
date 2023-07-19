const express = require("express");
const BookList = require("../model/BooksModel");
const router = express.Router();

router.get("/book/:id", async (req, res) => {
  try {
    const book = await BookList.find({ BookId: req.params.id });
    res.status(200).json([book]);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.get("/book-list", async (req, res) => {
  try {
    const books = await BookList.find();
    res.send(books);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
});

router.post("/add-book", async (req, res) => {
  try {
    const { BookId, BookName, AuthorName, Available } = req.body;
    const book = new BookList({
      BookId,
      BookName,
      AuthorName,
      Available,
    });

    await book.save();
    res.status(200).json({ message: "Book added" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.put("/edit-book/:id", async (req, res) => {
  try {
    const { BookName, AuthorName, Available } = req.body;
    await BookList.findOneAndUpdate(
      { BookId: req.params.id },
      {
        BookName,
        AuthorName,
        Available,
      }
    );
    res.status(200).json({ message: "Book updated" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.delete("/delete-book/:id", async (req, res) => {
  try {
    await BookList.deleteOne({ BookId: req.params.id });
    res.status(200).json({ message: "Book Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "error occur" });
  }
});

module.exports = router;
