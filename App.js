const express = require('express');
const socket = require('socket.io');

const app = express();

// this is taking the message sent from a client and sending it to everyone else in the chat

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('send_message', function(data){
        io.emit('recieve_message', data);
    })
});

