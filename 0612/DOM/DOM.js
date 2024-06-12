document.title = "my-web";
// document.body.style.backgroundColor = "black";

const userName ="Albert";
const welcomeMasg = document.getElementById("welcome-msg");
welcomeMasg.textContent += userName === "" ? ` Guest`:` ${userName}`;
