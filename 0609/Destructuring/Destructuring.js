// example 1
let a = 5;
let b = 4;
[a, b] = [b, a];
console.log(a);



// example 2
const colors = ["red", "blue", "violet", "orange"];
[colors[1], colors[3]] = [colors[3], colors[1]]
console.log(colors);

// example 3
const colors02 = ["red", "blue", "violet", "orange"];

const [d, e, f, ...others] = colors02;
console.log(others);


// example 4

const Person1 = {
    first_name: "albert",
    last_name: "Ben",
    age: 30,
    job: "Mcd",
}
const Person2 = {
    first_name: "blbert",
    last_name: "Cen",
    age: 30,
}

const { first_name, last_name, age, job = "Not employee." } = Person2;
console.log(job);

// example 5

function display_person({ first_name, last_name, age, job = "Unemployeed" }) {
    console.log(`name:${first_name} ${last_name}, age: ${age}, job:${job}`)
}

const Person3 = {
    first_name: "albert",
    last_name: "Ben",
    age: 30,
    job: "Mcd",
}
const Person4 = {
    first_name: "blbert",
    last_name: "Cen",
    age: 30,
}
display_person(Person3);