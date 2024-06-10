const roll = document.getElementById("my-button");
const label1 = document.getElementById("my-label1");
const label2 = document.getElementById("my-label2");
const label3 = document.getElementById("my-label3");



const min = 1;
const max = 6;
let random_num1;
let random_num2;
let random_num3;

roll.onclick = function () {
    random_num1 = Math.floor(Math.random() * (max - min) + min)
    random_num2 = Math.floor(Math.random() * (max - min) + min)
    random_num3 = Math.floor(Math.random() * (max - min) + min)


    label1.textContent = random_num1;
    label2.textContent = random_num2;
    label3.textContent = random_num3;
}