
const Books = require('../models/books')

exports.createBook = async (req, res) => {
    try {
        const book = new Books({ ...req.body })
        await book.save();
        res.send(book)
    }
    catch (err) {
        res.status(500).send(err)
    }
}
