// let age = 13;

// if (age >= 18) {
//     console.log("You can drink beer!")
// }
// else {
//     console.log("You are too young!")
// }

// let time = 12;
// if (time < 12) {
//     console.log("Good morning!")
// }
// else {
//     console.log("good afternoon!")
// }

// let is_student = true;

// if (is_student) {
//     console.log("You are a student!")
// }
// else {
//     console.log("You are not a student!")
// }

// let age = 16;
// let has_license = true;

// if (age >= 16) {
//     console.log("You can drive!")

//     if (has_license) {
//         console.log("You got the license!")
//     }
//     else {
//         console.log("You dont have license yet!")
//     }
// }
// else {
//     console.log("You are too young!")
// }

const submit = document.getElementById("my-sub-btn");

const text = document.getElementById("my-text");

const result = document.getElementById("result");


let age;

submit.onclick = function () {

    age = text.value;
    age = Number(age);

    if (age >= 100) {
        result.textContent = "100+";
    }

    else if (age == 0) {
        result.textContent = "0";
    }
    else if (age >= 18) {
        result.textContent = "18+";
    }
    else if (age < 0) {
        result.textContent = "-0?";
    }
    else {
        result.textContent = "You must be 18+ to enwter this site";
    }
}




// if (age >= 100) {
//     console.log("man you just too old")
// }

// else if (age == 0) {
//     console.log("You what?")
// }
// else if (age >= 18) {
//     console.log("You are old enough to enter this site!")
// }
// else if (age < 0) {
//     console.log(`Wtf how can you ${age} years old ?`)
// }
// else {
//     console.log("You must be 18+ to enter this site!")
// }