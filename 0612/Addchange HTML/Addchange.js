// 第一步 創造element
const newH1 = document.createElement("h1");
const newH2 = document.createElement("h2");

// 第二步 加上屬性

newH1.textContent = "I love pizza!";
newH1.id = "myH1";
newH1.style.color = "violet";
newH1.style.textAlign = "center";
newH2.textContent = "I love violet!";
// 第三步 加入DOM裡

// document.body.append(newH1);
// 直接加入的話會放在最後一個

document.body.prepend(newH2);
// 所以可以用prepend加在最前面

// document.getElementById("box1").prepend(newH1);
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);
// 把我的訊息插入 box2前面 可以使用insertBefore(訊息,插入位置);


// 如果都沒id怎麼選呢
const myBoxes = document.body.querySelectorAll(".box");
document.body.insertBefore(newH1, myBoxes[0]);



