// let day = "PIZZA";

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log(`${day} is not a day!`);
//         break;
// }


let score = 0;
let grade;

switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score >= 60:
        grade = "D";
        break;
    case score >= 50:
        grade = "E";
        break;
    default:
        grade = "F";
        break;
}
console.log(grade);