import React, { Component } from 'react';
import API from '../utils/api';
import { Link } from "react-router-dom";
//React-Bootstrap components:
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
//Custom Components:
import ShelfDisp from '../components/shelfDisp';

//Shelf will be nearly identical to library in structure, except that it 
//will pull from a different route. It will query the db rather than google books.

class Shelf extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
        .then(res =>
            this.setState({books: res.data})
            )
            .catch(err => console.log(err));

    }

    deleteBook = (id) => {
        API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err))

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
                {this.state.books.map(book => (
                    <ShelfDisp 
                        key= {book.id}
                        title= {book.title}
                        authors= {book.authors}
                        description= {book.description}
                        link= {book.link}
                        image= {book.image}
                        date= {book.date}
                        onClick= {() => this.deleteBook(book.id)}
                    />
            )
                )};
            </Container>
        )
    }
}

export default Shelf;