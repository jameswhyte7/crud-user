import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users';
import './App.css';
import AddUserForm from './components/AddUserForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: "BIG James",
          email: "BIG@intcodetrainm",
          gen: 24
        },
        {
          username: "Yaw Boison",
          email: "Boison@codetrain.com",
          gen: 20
        },
        {
          username: "Richard Brandt",
          email: "Brandt@codetrain.com",
          gen: 17
        },
        {
          username: "Jude Whyte",
          email: "JWhyte@codetrain.com",
          gen: 7
        },
        {
          username: "Juliana Quaye",
          email: "JQuaye@codetrain.com",
          gen: 7
        },
        {
          username: "Elon Musk",
          email: "Musk@incodetrainom",
          gen: 1
        },

      ]

    }
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="4">
              <AddUserForm />
            </Col>
            <Col>
              <Users usersData={this.state.users} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
