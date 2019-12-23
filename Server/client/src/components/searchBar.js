import React from 'react';
//React-Bootstrap components:
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function SearchBar() {
    return (
        <div>
            <InputGroup className="title mb-3 mx-auto w-75">
                <FormControl
                    placeholder="Title"
                    aria-label="BookTitle"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="author mb-3 mx-auto w-75">
                <FormControl
                    placeholder="Author"
                    aria-label="Author"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </div>

    )
}

export default SearchBar;

