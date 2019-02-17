import React, { Component } from 'react';
import { Input, Row, Button, Icon, Modal, Navbar, NavItem} from 'react-materialize'
import './Auth.css';

class Auth extends Component {
  render() {
    return (
      <Row>
        <Navbar brand='PetConnect' left>
          <Modal
            header='Login'
            trigger={<NavItem>Login</NavItem>}>
            <p>
              <Input placeholder="username" s={6} />
              <Input type="password" placeholder="password" s={6} />
              <Button waves='light'>login</Button>
            </p>
          </Modal>
          <Modal
            header='Sign up'
            trigger={<NavItem>Sign up</NavItem>}>
            <p>
              <Input placeholder="username" s={6}/>
              <Input type="password" placeholder="password" s={6} />
              <Button waves='light'>Create Account</Button>
            </p>
          </Modal>
        </Navbar>

        <div class="about">
          <div class="center">
            <img src='https://lorempixel.com/output/animals-q-c-800-410-9.jpg' class="photo"></img>
            <h1>PetConnect is a forum for users to talk with each other about their pets</h1>
          </div>
        </div>
      </Row>
    );
  }
}

export default Auth;
