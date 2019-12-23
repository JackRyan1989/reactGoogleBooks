import React, { Component } from 'react';
import API from '../utils/api';
import { Link } from "react-router-dom";

class Library extends Component {
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
            Library page works!
        </div>
    }
}

export default Library;