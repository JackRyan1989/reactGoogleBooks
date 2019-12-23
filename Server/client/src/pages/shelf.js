import React, { Component } from 'react';
import API from '../utils/api';
import { Link } from "react-router-dom";
//React-Bootstrap components:
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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
        return (
            <Container className='p-0' fluid='true'>
                {/* Render Navbar component */}
                <Navbar className="border-bottom" bg="transparent" expand="lg">
                    <Navbar.Brand id='navBarBrand'>Google Library</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/">Library</Link>
                    </Nav>
                </Navbar>
                {/* Render main page content */}
                <Jumbotron>
                    <Row>
                        <h1>Your phat stack awaits...</h1>
                    </Row>
                </Jumbotron>
                {/* Display books below */}
            </Container>
        )
    }
}

export default Shelf;