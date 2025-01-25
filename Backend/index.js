require('dotenv').config()
const express = require('express')
const cors = require('cors');


const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 5000


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173/"],
    credentials: true,
}));


const booksRoute = require("./src/books/book.route");
app.use("/api/books", booksRoute);












async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use("/", (req, res) => {
        res.send("Book Store Server is running!");
    });
}

main().then(() => console.log("Mongodb connect succesfully")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server is running on port " ${port}`);
})