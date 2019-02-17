
import React, { Component } from 'react';
import PrintedMessage from './PrintedMessage';
import './MessageHistory.css';

class MessageHistory extends Component {
  render() {
    return (this.props.messages.map(message => (<PrintedMessage user={message.user} message={message.message} />)));
  }
}

export default MessageHistory;
