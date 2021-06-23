
const Books = require('../models/books')

exports.createBook = async (req, res) => {
    try {
        const book = new Books({ ...req.body })
        await book.save();
        console.log("book", book)
    }
    catch (err) {
        res.status(500).send(err)
    }
}
exports.getBook = async (req, res) => {
    try {
        const id = req.params.id;
        const searchedBook = await Books.findById(id);
        res.send(searchedBook)
    }
    catch (e) {
        res.status(500).send(e)
    }
}
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Books.find({})
        res.send(books)
    }
    catch (e) {
        res.status(500).send(e)
    }
}
exports.deleteABook = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Books.findByIdAndDelete(id);
        res.send(book)
    }
    catch (e) {
        res.status(500).send(e)
    }
}
