import React from 'react';
import {Card, Col} from 'react-bootstrap';

const User = (props) => {
    return (
        <Col md="4">
            <Card style={{ width: '16rem', marginTop: '2rem', }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">CodeTrain Africa</Card.Subtitle>
                    <Card.Title>{props.userInfo.username}</Card.Title>
                    <Card.Text>
                        <p>Email: {props.userInfo.email}</p>
                        <p>Gen: {props.userInfo.gen}</p>
                    </Card.Text>
                    <Card.Link style={{ backgroundColor: '#0d6efd', borderRadius: '8px', padding: '.5rem', fontFamily: 'monoSpace', color: 'white' }} >Edit</Card.Link>
                    <Card.Link style={{ backgroundColor: '#dc3545', borderRadius: '8px', padding: '.5rem', fontFamily: 'monoSpace', color: 'white' }} >Delete</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default User;
