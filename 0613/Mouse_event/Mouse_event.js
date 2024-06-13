const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click",event=>{
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "Ouch!😢";
})


myButton.addEventListener("mouseover",event =>{
  myBox.style.backgroundColor = "violet";
  myBox.textContent = "Oh! You touch me!🤔";
});

myButton.addEventListener("mouseout",event =>{
  myBox.style.backgroundColor = "aquamarine";
  myBox.textContent = " click me!😊";
})

