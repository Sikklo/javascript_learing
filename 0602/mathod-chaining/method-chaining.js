let username = window.prompt("Enter your username!")

//沒有使用 method-chaining
// username = username.trim();

// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// let extar = username.slice(1);
// extar = extar.toLocaleLowerCase();
// username = letter + extar;
// console.log(username);

//有使用 method-chaining
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase();

console.log(username);
