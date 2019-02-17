import React, { Component } from 'react';
import { Input, Row, Button, Modal, Navbar, NavItem } from 'react-materialize'
import './Auth.css';

class Auth extends Component {
  state = {
    loginPassword: '',
    loginUsername: '',
    signupPassword: '',
    signupUsername: '',
  };

  onChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  removeOverlays = () => {
    const sidenavOverlay = document.getElementById('sidenav-overlay');
    if (sidenavOverlay && sidenavOverlay.parentNode) {
      sidenavOverlay.parentNode.removeChild(sidenavOverlay);
    }
    const modalOverlay = document.getElementsByClassName('modal-overlay');
    if (modalOverlay && modalOverlay[0] && modalOverlay[0].parentNode) {
      modalOverlay[0].parentNode.removeChild(modalOverlay[0]);
    }
  };

  render() {
    return (
      <Row>
        <Navbar brand="PetConnect" left>
          <Modal
            header="Login"
            trigger={<NavItem>Login</NavItem>}>
            <div>
              <Input name="loginUsername" placeholder="username" s={6} value={this.state.loginUsername} onChange={this.onChange} />
              <Input name="loginPassword" type="password" placeholder="password" s={6} value={this.state.loginPassword} onChange={this.onChange} />
              <Button waves="light" onClick={() => {
                this.removeOverlays();
                this.props.onAuthChanged({
                  type: 'LOGIN',
                  username: this.state.loginUsername,
                });
              }}>Login</Button>
            </div>
          </Modal>
          <Modal
            header="Sign up"
            trigger={<NavItem>Sign up</NavItem>}>
            <div>
              <Input name="signupUsername" placeholder="username" s={6} value={this.state.signupUsername} onChange={this.onChange} />
              <Input name="signupPassword" type="password" placeholder="password" s={6} value={this.state.signupPassword} onChange={this.onChange} />
              <Button waves="light" onClick={() => {
                this.removeOverlays();
                this.props.onAuthChanged({
                  type: 'SIGNED_UP',
                  username: this.state.signupUsername,
                });
              }}>Create Account</Button>
            </div>
          </Modal>
        </Navbar>

        <div className="about">
          <div className="center">
            <img src="https://lorempixel.com/output/animals-q-c-800-410-9.jpg" className="photo" alt="Dog"></img>
            <h3>PetConnect is a forum for users to talk with each other about their pets</h3>
          </div>
        </div>
      </Row>
    );
  }
}

export default Auth;
