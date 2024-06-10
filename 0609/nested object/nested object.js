// const Person = {
//     full_name: "Spongebob Squarepants",
//     age: 30,
//     is_student: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address: {
//         street: "124 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Water",
//     }
// }

// console.log(Person.address.country);


class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
const person01 = new Person("albert", "30", "abc St.", "TY", "TW");
const person02 = new Person("blbert", "31", "def St.", "NT", "TW");
console.log(person01.address);