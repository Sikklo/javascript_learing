const myH1 = document.getElementById("my-h1");
myH1.style.background = "yellow";
myH1.style.textAlign  ="Center";


const fruits = document.getElementsByClassName("fruits");
// fruits[0].style.backgroundColor = "yellow";

// for(let fruit of fruits){
//   fruit.style.backgroundColor = "blue";
// }

// Array.from(fruits).forEach(fruit =>{
//   fruit.style.backgroundColor = "Violet";
// }
// );

// const h4Ele = document.getElementsByTagName("h4");
// console.log(h4Ele);

// const element = document.querySelector(".fruits");
// 他只會選到第一個match到的 像這裡他選擇了class是fruits的"第一個"element

// element.style.backgroundColor = "Black";


const element = document.querySelectorAll("li");
//這個是可以選擇所有的 只要是li 不限定他是不是第一個li 然後會把它存為一個陣列 所以需要使用陣列的方式來使用
element[4].style.backgroundColor = "Red";
