const router = require("express").Router();
const Book = require("../model/book");

router.post("/book", async (req, res) => {
  const newBook = new Book({
    Id: req.body.Id,
    title: req.body.title,
    author: req.body.author,
    publicationYear: req.body.publicationYear,
    genre: req.body.genre,
    description: req.body.description
  });
  const savedBook = await newBook.save();
  res.status(200).json(savedBook);
});

module.exports = router;
