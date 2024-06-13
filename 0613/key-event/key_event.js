const mybox = document.getElementById("mybox");
const moveAmount = 100;
let x = 0;
let y = 0;
document.addEventListener("keydown",event =>{
  mybox.textContent = "🎶";
  mybox.style.backgroundColor = "violet";
});
document.addEventListener("keyup",event =>{
mybox.textContent = "😢";
mybox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown",event =>{
  if(event.key.startsWith("Arrow")){
    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x += moveAmount;
        break;
      case "ArrowRight":
        x -= moveAmount;
        break;
    }
    mybox.style.top = `${y}px`;
    mybox.style.right = `${x}px`;
  }
})
