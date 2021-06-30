import React from "react";
import "./search__form.css"
import { InputGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { FormControl  } from 'react-bootstrap'

function SearchForm(){
return(
    <div className="search__input" >
   

        <InputGroup className="mb-3">
            <FormControl
                placeholder="Search in products"
                aria-label="Search in products"
                aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
                <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
        </InputGroup>

 
    </div>
)
}

export default SearchForm ;