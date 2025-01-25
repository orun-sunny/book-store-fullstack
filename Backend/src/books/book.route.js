const express = require('express');
const Book = require('./book.model');
const { postBook, getAllBooks } = require('./book.controller');
const router = express.Router();


router.post("/create-book", postBook)

router.get("/", getAllBooks)

module.exports = router;