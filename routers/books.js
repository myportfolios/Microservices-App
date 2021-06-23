const express = require("express");
const router = new express.Router();

//controllers
const testPageController = require("../controllers/testPageController");
const bookController = require("../controllers/bookController");

router.get("/", testPageController);

//create book
router.post("/books/create", bookController.createBook);
router.get('/book/:id', bookController.getBook)
router.get('/books', bookController.getAllBooks)
router.delete('/book/:id', bookController.deleteABook)



module.exports = router;
