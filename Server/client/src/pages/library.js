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
//Custom components:
import SearchBar from '../components/searchBar';
import SearchButton from '../components/searchButton';


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
        return (
            <Container className='p-0' fluid='true'>
                {/* Render Navbar component */}
                <Navbar className="border-bottom" bg="transparent" expand="lg">
                    <Navbar.Brand id='navBarBrand'>Google Library</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/shelf">Your Shelf</Link>
                    </Nav>
                </Navbar>
                {/* Render main page content */}
                <Jumbotron>
                    <Row>
                        <h1>The Library of Googlexandria</h1>
                    </Row>
                </Jumbotron>
                <Row className='mx-auto'>
                    <Col lg={6} sm={12}>  
                        <Card className='text-center'>
                                <h3>Recently searched for titles</h3>
                        </Card>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Card className='text-center'>
                                <h3>Find a book</h3>
                                <SearchBar />
                                <SearchButton />
                        </Card>
                    </Col>
                </Row>
            </Container>



        )
    }
}

export default Library;