const mongoose = require('mongoose');

//books schema
const booksSchema = new mongoose.Schema(
    {
        title:{
            type:String,
        },
        author:{
            type:String, 
        },
        year:{
            type:String
        }
    }
)
const Books = mongoose.model('Books', booksSchema)
module.exports =  Books


