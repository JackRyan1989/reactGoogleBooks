import React from 'react';
//React-Bootstrap components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
//Custom CSS to resize the top Image:
import './bookDisp.css';



function LibraryDisp(props) {
    return (
        <div className="mx-auto">
            <Card id={props.id} className='p-2 m-2 border-0 card bookCard' style={{ width: '18rem' }}>
                <Image className="card-img-top" variant='top' src={props.image} />
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.authors}
                </Card.Text>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant='success'><a href={props.link} rel="noopener noreferrer" target="_blank">View in Library</a></Button>
                <Button {...props} className='my-3'>Save to Shelf</Button>
            </Card>
        </div>
    )
}

export default LibraryDisp;
