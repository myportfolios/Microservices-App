const express = require("express");
const router = new express.Router();

//controllers
const testPageController = require("../controllers/testPageController");
const bookController = require("../controllers/bookController");

router.get("/", testPageController);

//create book
router.post("/books/create", bookController.createBook);
router.get('/books/:id', bookController.getBook)
router.get('/books', bookController.getAllBooks)
router.delete('/books/:id', bookController.deleteABook)



module.exports = router;
