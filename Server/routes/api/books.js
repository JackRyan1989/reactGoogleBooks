const router = require('express').Router();
const bookController = require('../../controllers/bookController.js');

//Search for a book from the google books api:
router.route('/')
    .get(bookController.findOne);

//Get all books from the db:



//Save a specific book to the db:
router.router('/:id')
    .get()