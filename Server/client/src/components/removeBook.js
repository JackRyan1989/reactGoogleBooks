import React from "react";
//React-bootstrap components:
import Button from 'react-bootstrap/Button';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function RemoveBtn(props) {
  return (
    <Button className="my-3 removeBtn" variant='danger' {...props} role="button" tabIndex="0">
      Remove Book
    </Button>
  );
}

export default RemoveBtn;