// let username = "";

// while (username === "" || username === null) {
//     username = window.prompt("Enter your name：");
// }


// console.log(`Hello, ${username}`);

let logged_in = false;
let username;
let password;

while (!logged_in) {
    username = window.prompt("Enter your name!")
    password = window.prompt("Enter your password!")
    if (username === "myusername" && password === "mypassword") {
        logged_in = true;
        console.log("you are logged in");
    }
    else {
        console.log("Try again!")
    }
}