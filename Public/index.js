//Create Connection to server
var socket = io();

//Get Dom Data
const chatView = document.getElementById("chatView");
const nameDiv = document.getElementById("name");
const msg = document.getElementById("msg");
const but = document.getElementById("sendButton");
const typing = document.getElementById("typing");

but.addEventListener("click", () => {
  console.log("click");
  socket.emit("chat", { name: nameDiv.value, msg: msg.value });
  msg.value = "";
});

socket.on("chat", (data) => {
  chatView.innerHTML +=
    "<p><strong style='color:blur'>" +
    data.name +
    "</strong>: " +
    data.msg +
    "</p>";
  typing.innerHTML = "";
});

msg.addEventListener("focus", () => {
  console.log("keypress");
  socket.emit("typing", nameDiv.value + " is typing...");
});

msg.addEventListener("blur", () => {
  console.log("blur");
  socket.emit("typing", "");
});

socket.on("typing", (data) => {
  typing.innerHTML = data;
});
