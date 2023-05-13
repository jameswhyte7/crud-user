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
          name: "BIG James",
          email: "BIG@codetrain.com",
          gen: 24
        },
        {
          name: "Yaw Boison",
          email: "Boison@codetrain.com",
          gen: 20
        },
        {
          name: "Richard Brandt",
          email: "Brandt@codetrain.com",
          gen: 17
        },
        {
          name: "Jude Whyte",
          email: "JWhyte@codetrain.com",
          gen: 7
        },
        {
          name: "Juliana Quaye",
          email: "JQuaye@codetrain.com",
          gen: 7
        },
      ]

    }
  }

  addNewUser = (user) => {
    this.setState({
      users: [...this.state.users, user]
  })
}

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="4">
              <AddUserForm addUser={this.addNewUser} />
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
