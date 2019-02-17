
import React from "react";
import io from "socket.io-client";

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };

this.sendMessage = ev => {
    ev.preventDefault();
    this.socket.emit('send_message', {
        author: this.state.username,
        message: this.state.message
    });
    this.setState({message: ''});
}

this.socket.on('recieve_message', function(data){
    addMessage(data);
});

const addMessage = data => {
    console.log(data);
    this.setState({messages: [...this.state.messages, data]});
    console.log(this.state.messages);

    // this is where the components for the front end will go once we combine our work =>





// <=
//this is the code to get the front end to link to backend =>