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
import LibraryDisp from '../components/libraryDisp';


class Library extends Component {
    state = {
        books: [],
        bookSearch: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        API.findBooks(this.state.bookSearch)
            .then(res => this.setState({
                books: res.data.items
            }))
            .catch(err => console.log(err));
    }

    //Later: see if you can't get this to work using State.
    saveBook = (event) => {
        event.preventDefault();
        const authors = event.target.getAttribute('authors');   
        const title = event.target.getAttribute('title');
        const description = event.target.getAttribute('description');
        const link = event.target.getAttribute('link');
        const image = event.target.getAttribute('image');
        const id = event.target.getAttribute('id')
        API.saveBook({title, authors, description, link, image, id})
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
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
                            <h3>Find a book</h3>
                            <SearchBar
                                name="bookSearch"
                                value={this.state.bookSearch}
                                onChange={this.handleInputChange}
                            />
                            <SearchButton
                                onClick={this.handleSubmit}
                            />
                        </Card>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Card className='text-center'>
                            <h3>Your books, my liege.</h3>
                        </Card>
                        {/* Display books below */}
                        {this.state.books.map(book => (
                            <div>
                                <LibraryDisp
                                    key={book.id}
                                    id={book.id}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors[0]}
                                    description={book.volumeInfo.description}
                                    link={book.volumeInfo.infoLink}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    date={book.date}
                                    onClick={this.saveBook}
                                />
                            </div>
                        )
                        )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Library;