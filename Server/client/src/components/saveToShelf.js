import React, { Component } from 'react';
import API from '../utils/api';
//React-Bootstrap components
import Button from 'react-bootstrap/Button';

function SaveBook(props) {    
        return (
            <div>
                <Button {...props} className = 'my-3'>Save to Shelf</Button>
            </div>
        )
}

export default SaveBook;