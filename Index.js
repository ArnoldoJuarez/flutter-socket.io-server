const express = require('express');
const path = require('path');
require('dotenv').config();

//ap de expres
const app = express();

//node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

//llamos mesnjaes sockets js
require("./Sockets/socket");

//pat pubica
const pathPublic = path.resolve( __dirname,'public');

app.use(express.static(pathPublic));

server.listen(process.env.PORT, (err) => {
    if  (err) throw  new Error(err);
    console.log("Servidor corriendo en puerto ",process.env.PORT);
    
})

/*app.listen(process.env.PORT, (err) => {
    if  (err) throw  new Error(err);
    console.log("Servidor corriendo en puerto ",process.env.PORT);
    
})*/