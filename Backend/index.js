require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 5000












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