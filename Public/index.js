//Create Connection to server
var socket = io();

//Get Dom Data
const chatView = document.getElementById("chatView");
const nameDiv = document.getElementById("name");
const msg = document.getElementById("msg");
const but = document.getElementById("sendButton");
const typing = document.getElementById("typing");

but.addEventListener("click", () => {
  socket.emit("chat", { name: nameDiv.value, msg: msg.value });
  msg.value = "";
});

socket.on("chat", (data) => {
  chatView.innerHTML +=
    "<p><strong style='color:skyblue'>" +
    data.name +
    "</strong>: " +
    data.msg +
    "</p>";
  typing.innerHTML = "";
});

msg.addEventListener("focus", () => {
  socket.emit("typing", nameDiv.value + " is typing...");
});

msg.addEventListener("blur", () => {
  socket.emit("typing", "");
});

socket.on("typing", (data) => {
  typing.innerHTML = data;
});
