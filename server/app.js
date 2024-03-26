const express = require('express');
const http = require('http');
const { Server } = require('socket.io'); // Modified import
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log('We are connected');

    socket.on("chat", chat => {
        io.emit('chat', chat); // Emit the received chat message back to all clients
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
});

server.listen(5001, () => console.log('Listening to port 5001'));
