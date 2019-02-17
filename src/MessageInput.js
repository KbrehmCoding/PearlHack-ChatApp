import React, { Component } from 'react';
import { Input, Row } from 'react-materialize';
import './MessageInput.css';

class MessageInput extends Component {
  render() {
    return (
        <Row>
            <Input s={12} type="textarea" label="Enter Message Here" />
        </Row>
    );
  }
}

export default MessageInput;
