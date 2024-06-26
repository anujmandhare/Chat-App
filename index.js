//Create Express server and socket
const express = require("express");
const socket = require("socket.io");

var app = express();
var server = app.listen(3000, () => {
  console.log("Server Listening at port 3000.");
});

app.use(express.static("Public"));

//Create Scoket Connection
var io = socket(server);
io.on("connect", (socket) => {
  console.log("Socket Connection Established", socket.id);

  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });
});
