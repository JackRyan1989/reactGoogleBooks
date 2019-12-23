import React, { Component } from 'react';
import API from '../utils/api';
import { Link } from "react-router-dom";

//Shelf will be nearly identical to library in structure, except that it 
//will pull from a different route. It will query the db rather than google books.

class Shelf extends Component {
    state = {
        books: [],
        title: '',
        authors: [],
        description: '',
        link: '',
        image: ''
    }

    render() {
        <div>
            Shelf page works!
        </div>
    }
}

export default Shelf;