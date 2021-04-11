//Create Connection to server
var socket = io();

//Get Dom Data
const chatView = document.getElementById("chatView");
const nameDiv = document.getElementById("name");
const msg = document.getElementById("msg");
const but = document.getElementById("sendButton");

but.addEventListener("click", () => {
  console.log("emit");
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
});
