import React, { Component } from 'react';
import PrintedMessage from './PrintedMessage';
import './MessageHistory.css';

class MessageHistory extends Component {
  render() {
    return (this.props.messages.map(message => (<PrintedMessage key={message.id} user={message.user} message={message.message} />)));
  }
}

export default MessageHistory;
