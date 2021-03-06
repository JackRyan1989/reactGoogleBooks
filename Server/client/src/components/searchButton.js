import React from 'react';
//React-bootstrap components:
import Button from 'react-bootstrap/Button';


//We will pass in an onClick function through the props in a second here:
function SearchButton(props) {
    return (
        <div>
            <Button onClick={props.onClick} className="mb-3" variant="success">GO!</Button>
        </div>
    )
}


export default SearchButton;