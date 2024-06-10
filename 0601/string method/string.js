let username = "Albertb";



// console.log(username.charAt(2));
// console.log(username.indexOf("b"));
// console.log(username.lastIndexOf("b"));
// console.log(username.length);
// username = username.trim();//可以把頭尾如果有不小心加上去的空格 他會把它去掉 trimstar();去頭 trimend();去尾
// console.log(username);
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// console.log(username.repeat(2));

// let result = username.startsWith(" ");
//檢查他開頭是不是空格
// let result = username.endsWith(" ");
// let result = username.includes(" ");
// if (result) {
//     console.log("You can' includs with ' ' ");
// }
// else {
//     console.log(username);
// }

let phone_number = "123-456-7890";

// phone_number = phone_number.replaceAll("-", "");
// phone_number = phone_number.padStart(13, "0");
//限制他總共可以有13個字 然後 如果有少字 開頭補0

phone_number = phone_number.padEnd(15, "0");
console.log(phone_number);