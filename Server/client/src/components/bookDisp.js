import React from 'react';
//React-Bootstrap components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
//Custom CSS to resize the top Image:
import './bookDisp.css';

function BookDisp(props) {
    return (
        <div className="mx-auto">
            <Card className='p-2 m-2 border-0 card bookCard' style={{ width: '18rem' }}>
                <Image className="card-img-top" variant='top' src={props.image} />
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <p>{props.authors}</p>
                    <p>{props.description}</p>
                    <Button variant='success'><a href={props.link} rel="noopener noreferrer" target="_blank">Read Now!</a></Button>
                </Card.Text>
            </Card>
        </div>
    )
}

export default BookDisp;
