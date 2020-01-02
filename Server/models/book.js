const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String},
    authors: [{type: String}],
    description: {type: String},
    link: {type: String},
    image: {type: String},
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

