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
        const books = await Book.find().sort({ createdAt: -1 });
        res.status(200).send(books);


    }
    catch (err) {
        console.log("Error inv featcing book", err);
        res.status(500).send({ message: "Failed to fetch book" });

    }
}

const getSingleBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            res.status(404).send({ message: "Book not Found", book: newBook })
        }
        res.status(200).send(book);


    }
    catch (err) {
        console.log("Error inv featcing book", err);
        res.status(500).send({ message: "Failed to fetch book" });

    }

}


const UpdateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true })
        if (!updatedBook) {
            res.status(404).send({ message: " book is not found" })
        }
        res.status(200).send({
            message: "Book updated Succesfully",
            book: updatedBook

        });

    }
    catch {
        console.log("Error updating book", err);
        res.status(500).send({ message: "Failed to update book" });
    }

}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deleteBook) {
            res.status(404).send({ message: " book is not found" })
        }
        res.status(200).send({
            message: "Book deleted Succesfully",
            book: deletedBook

        });

    }
    catch {
        console.log("Error updating book", err);
        res.status(500).send({ message: "Failed to update book" });

    }
}

module.exports = { postBook, getAllBooks, getSingleBook, UpdateBook, deleteBook };