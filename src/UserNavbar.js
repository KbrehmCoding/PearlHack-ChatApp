import React, { Component } from 'react';
import { Navbar, NavItem, Row } from 'react-materialize';
import './UserNavbar.css';

class UserNavbar extends Component {
    render() {
        return (
            <Row>
                <Navbar brand="PetConnect" left>
                    <NavItem>Log Out</NavItem>
                    <NavItem>Forums</NavItem>
                </Navbar>
            </Row>
        );
    }
}

export default UserNavbar;
