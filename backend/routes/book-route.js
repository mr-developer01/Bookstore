const expres = require("express");
const router = expres.Router();

const bookModel = require("../models/book-models");

// Creating book
router.post("/addbook", async (req, res) => {
  try {
    const { bookname, description, author, image, price } = req.body;

    const book = await bookModel.create({
      bookname,
      description,
      author,
      image,
      price,
    });

    res.status(200).json({ message: "Book added successfully", book });
  } catch (error) {
    console.log(error);
  }
});

// Getting all books
router.get("/getbooks", async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json({ books });
  } catch (error) {
    console.log(error);
  }
});

// Getting a book by its ID
router.get("/getbooks/:id", async (req, res) => {
  try {
    const book = await bookModel.findById({ _id: req.params.id });
    res.status(200).json({ book });
  } catch (error) {
    console.log(error);
  }
});

// Update a book by its ID
router.put("/updateBook/:id", async (req, res) => {
  try {
    const { bookname, description, author, image, price } = req.body;
    const book = await bookModel.findByIdAndUpdate(
      { _id: req.params.id },
      { bookname, description, author, image, price }
    );
    res.status(200).json({ book });
  } catch (error) {
    console.log(error);
  }
});

// Update a book by its ID
router.delete("/deleteBook/:id", async (req, res) => {
  try {
    const book = await bookModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ book });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
