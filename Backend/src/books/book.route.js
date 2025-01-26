const express = require('express');
const Book = require('./book.model');
const { postBook, getAllBooks, getSingleBook, UpdateBook, deleteBook } = require('./book.controller');
const router = express.Router();


router.post("/create-book", postBook)

router.get("/", getAllBooks)

router.get('/:id', getSingleBook)

// update book end point
router.put("/edit/:id", UpdateBook)

//delete 
router.delete("/:id", deleteBook)

module.exports = router;