import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {

    return(
        <div  className="login-form">
            <h1 className="text-center">Mein Konto Anmelden</h1>
            <div className="login-form-wrapper">

        
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Forgotten Password ?" />
                    </Form.Group>
                <button variant="primary" type="submit">
                    Submit
                    </button>
            </Form>
            </div>

            <div>
                <div>
                </div>
            </div>
        </div>
       

    )
}