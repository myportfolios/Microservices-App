const mongoose = require('mongoose');

//books schema
const booksSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String, 
            required:true
        },
        numberPages:{
            type:Number,
            required:false
        },
        publisher:{
            type:String,
            required:false
        }
    }
)
const Books = mongoose.model('Books', booksSchema)
module.exports =  Books

//A model is a reference to a collection in our DB
