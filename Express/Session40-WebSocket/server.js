const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

//server the static files
app.use(express.static('public'));

//Handle the websocket connection
wss.on('connection', (conn) => {

    console.log("Client Connected");
    conn.on('message', (msg) => {
        console.log("Received " + msg);
        //Brodcast the message to your all connected clients
        wss.clients.forEach((client) => {
            if (client !== conn && client.readyState === WebSocket.OPEN) {
                client.send(msg)
            }
        })
    })
    conn.on('close', () => {
        console.log("A client disconnected");
    })
})

server.listen(3000, () => {
    console.log("Websocket server is listinging to Port 3000");
})