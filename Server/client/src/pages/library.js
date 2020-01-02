import React, { Component } from 'react';
import API from '../utils/api';
import { Link } from "react-router-dom";
import io from 'socket.io-client';
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

let socket;

class Library extends Component {
    state = {
        books: [],
        bookSearch: ""
    }

    componentDidMount = () => {
        socket = io();
        socket.on('connect', (data) => {
            socket.emit('join', 'Hello World from client');
        })
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

    //Function for notifying user of saved book:
    sendBook = (bookInfo) => {
            socket.emit('saveBook', bookInfo);
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
        API.saveBook({ title, authors, description, link, image, id })
            .then(res => {
                let bookInfo = {title: res.data.title, authors: res.data.authors.join("")}
                this.sendBook(bookInfo);
                socket.on('bookSaved', (data) => {
                    alert(`Saved ${data.title} by ${data.authors} to library!`);
                })
        })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container className='p-0' fluid='true'>
                {/* Render Navbar component */}
                <Navbar className="border-bottom fixed-top" bg="dark" expand="lg">
                    <Navbar.Brand id='navBarBrand' className="text-white">Google Library</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Link className="nav-link text-white" to="/shelf">Your Shelf</Link>
                    </Nav>
                </Navbar>
                {/* Render main page content */}
                <Jumbotron className="my-4 jumbo">
                    <Row>
                        <h1 className="mt-4">The Library of Googlexandria</h1>
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
                        {(!this.state.books) ?
                            <div className="my-3">
                                <h2>Book not found.</h2>
                            </div>
                            : this.state.books.map(book => (
                                <div className="float-left">
                                    <LibraryDisp
                                        key={book.id}
                                        id={book.id}
                                        title={book.volumeInfo.title}
                                        authors={(!book.volumeInfo.authors) ? "" : book.volumeInfo.authors.join(", ")}
                                        description={(!book.volumeInfo.description) ? "No description available" : book.volumeInfo.description}
                                        link={(!book.volumeInfo.infoLink) ? "No link available" : book.volumeInfo.infoLink}
                                        image={(!book.volumeInfo.imageLinks) ? "https://www.motorolasolutions.com/content/dam/msi/images/products/accessories/image_not_available_lg.jpg" : book.volumeInfo.imageLinks.thumbnail}
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