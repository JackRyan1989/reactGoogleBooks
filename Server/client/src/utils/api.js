import axios from 'axios';
import dotenv from 'dotenv';
const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const key = dotenv.key;

//You can call these methods via the frontend
//They will return data existing at these urls
//The routes coinciding with these urls exist in your routes/books file.
//The way these routes relate to your database is described in the controllers/bookController file.
//I think I need to add a route to interact with the GoogleAPI.
//But first lets see if we can't grab the book existing in the DB.
export default {
    getBooks: function () {
        return axios.get('/api/shelf');
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/shelf/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/shelf/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/shelf", bookData);
    }
};
