import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import logo from './CodetrainImage.png'

class AddUserForm extends Component {
    render() {
        return (
            <>
                <div className='Main'>
                    <div>
                        <img style={{ width: '17rem' }} className='Img' src={logo} alt='Codetrain Logo'></img>
                    </div>

                    <div style={{marginTop: '3rem' }} className='Container'>
                        <Form>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formDangerEmail">
                                <Form.Label>Gen</Form.Label>
                                <Form.Control type="text" placeholder="Enter Gen" />
                            </Form.Group>
                            <Button variant="warning" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </>
        );
    }
}

export default AddUserForm;
