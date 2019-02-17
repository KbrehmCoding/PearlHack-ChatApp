
import React, { Component } from 'react';
import { Row } from 'react-materialize';
import './PrintedMessage.css';

class PrintedMessage extends Component {
  render() {
    return (
        <Row>
          {this.props.user} {this.props.message}
        </Row>
    );
  }
}

export default PrintedMessage;
