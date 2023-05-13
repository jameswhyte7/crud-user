import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import logo from './CodetrainImage.png'

class AddUserForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            gen:"",
        }
    }

    handleChange =(e)=> {
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value})
        
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name:"",
            email:"",
            gen:"",
        })
        
    }

    render() {
        return (
            <>
                <div className='Main'>
                    <div>
                        <img style={{ width: '17rem' }} className='Img' src={logo} alt='Codetrain Logo'></img>
                    </div>

                    <div style={{marginTop: '3rem' }} className='Container'>

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" name="name" value={this.state.name} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formDangerEmail">
                                <Form.Label>Gen</Form.Label>
                                <Form.Control type="number" placeholder="Enter Gen" name="gen" value={this.state.gen} onChange={this.handleChange} />
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
