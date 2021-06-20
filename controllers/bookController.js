
const Books = require('../models/books')

exports.createBook = async (req, res) => {
    console.log("request body", req.body)
    try{
        const newBook = new Books({...req.body})
        await newBook.save();
        res.send(newBook)
    }
    catch(err){  
          res.status(500).send(err)
    }
}
