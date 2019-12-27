import React from "react";
//React-bootstrap components:
import Button from 'react-bootstrap/Button';
//Custom CSS to resize the top Image:
import './bookDisp.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function RemoveBook(props) {
  return (
    <div>
      <Button className="mx-3 my-2 removeBtn" variant='danger' {...props} role="button" tabIndex="0">
        Remove Book
    </Button>
    </div >
  );
}

export default RemoveBook;