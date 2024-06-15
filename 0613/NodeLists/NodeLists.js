let myBtn = document.querySelectorAll(".myBtn");

console.log(myBtn);


// myBtn.forEach(btn => {
//     btn.addEventListener("click", event => {
//         btn.style.color = "violet";
//     })
// })


// myBtn.forEach(btn => {
//     btn.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "red";
//     })
//     btn.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "violet";
//     })
// })


const newBtn = document.createElement("button");
newBtn.textContent = "Button5"

newBtn.classList = ("myBtn");

document.body.appendChild(newBtn);

myBtn = document.querySelectorAll(".myBtn");
console.log(myBtn);