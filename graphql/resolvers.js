const Books = require('../models/books') 

/***** Query ****************/
const Query = {
    books: async (root) => {
        const books = await Books.find({})
        return books
    }
}

/***** Mutations ****************/

const Mutation = { 
createBook:(root,{input:{title,author, numberPages, publisher}}) => {
    const book = new Books({title,author, numberPages,publisher})
    book.save()
    return book
}
}

module.exports = {Mutation, Query}