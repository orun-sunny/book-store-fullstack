const Book = require("./book.model");
const { get } = require("./book.route");

const postBook = async (req, res) => {
    try {
        const newBook = await Book({ ...req.body });
        await newBook.save();
        res.status(200).send({ message: "Book created successfully", book: newBook });
    }
    catch (err) {
        console.log("Error in creating book", err);
        res.status(500).send({ message: "Internal server error" });
    }

}

// get all books

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).send(books);


    }
    catch (err) {
        console.log("Error inv featcing book", err);
        res.status(500).send({ message: "Failed to fetch book" });

    }
}

module.exports = { postBook, getAllBooks };