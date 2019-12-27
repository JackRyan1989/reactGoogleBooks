const db = require('../models');

//What do we want to do?
//1. We want to add books to the db. This is a 'create' command.
//2. We want to list all items in the db, sorted alphabetically by author. This is a 'findAll' command.
//3. We may want to build this out a bit, include tags and ratings maybe?

module.exports = {
    findAll: function (req, res) {
        db.Book
            .find(req.query)
            .sort({ authors: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Book
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}