import axios from 'axios';
import dotenv from 'dotenv';
const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const key = dotenv.key;


//Query Google Books API to search for book:
export default {
    findBooks: function(query) {
        return axios.get(BASEURL + query + key);
        }
    };

//We will need to pass other routes through here,right?