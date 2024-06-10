// function HBD(username, age) {
//     console.log("happy birthday to you!");
//     console.log("happy birthday to you!");
//     console.log(`happy birthday to dear ${username}!`);
//     console.log("happy birthday to you!");
//     console.log(`happy birthday to you!! You are now ${age} years old!`);
// }

// HBD("Albert", 25);
// HBD("Patrick", 15);

function add(x, y) {
    return x + y;
}

// function sub(x, y) {
//     return x - y;
// }

// console.log(sub(5, 2));


// function is_even(inp_number) {
//     // if (inp_number % 2 === 0) {
//     //     return `${inp_number} is a even`;
//     // }
//     // else {
//     //     return false;
//     // }

//     return inp_number % 2 === 0 ? `${inp_number} are the even` : `${inp_number} are not even`;
// }
// console.log(is_even(9));


function is_valid_email(email) {
    // if (email.includes("@")) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return email.includes("@") ? true : false;

}

console.log(is_valid_email("morkeylukel@gmail.com"));