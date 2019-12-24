const router = require('express').Router();
const bookController = require('../../controllers/bookController.js');


//Get all books from the db, and also save books to db.
// Matches with "/api/shelf"
router.route("/")
    .get(bookController.findAll)
    .post(bookController.create);

// Matches with "/api/shelf/:id"
router
    .route("/:id")
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.remove);

module.exports = router;