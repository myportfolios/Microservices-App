const mongoose = require('mongoose');

//books schema
const booksSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            require:true
        },
        author:{
            type:String, 
            require:true
        },
        numberPages:{
            type:Number,
            require:false
        },
        publisher:{
            type:String,
            require:false
        }
    }
)
const Books = mongoose.model('Books', booksSchema)
module.exports =  Books

//A model is a reference to a collection in our DB
