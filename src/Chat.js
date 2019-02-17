import React, { Component } from 'react';
import './Chat.css';
import MessageHistory from './MessageHistory';
import MessageInput from './MessageInput';

class Chat extends Component {
  render() {
    return (
      <div>
        <MessageHistory messages={this.props.forum.messages} />
        <MessageInput />
      </div>
    );
  }
}

export default Chat;
//need to have the name of user as the label for the message that they send when it appears in the chat history
