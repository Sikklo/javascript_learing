// const jsonNames = `["SpongeBob", "Patrick", "Squidward", "Sandy"]`;

// const jsonPerson = `{
//     "name": "SpongeBob", "age": 30, "isEmployeed": true, "habby": ["Jellyfishing", "Karate", "Cooking"]
// }`;
// const jsonPeople = `[{ "name": "SpongeBob", "age": 30, "isEmployeed": true }, { "name": "Patrick", "age": 34, "isEmployeed": false }, { "name": "Squidward", "age": 50, "isEmployeed": true }, { "name": "Sandy", "age": 27, "isEmployeed": false }
// ]`;
// const jsonString = JSON.stringify(people); 把原本陣列或物件轉成單純string
// console.log(jsonString)

// const parsedDate = JSON.parse(jsonNames); // 把單純string轉回陣列或物件
// console.log(parsedDate);

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value =>
        console.log(value.name)
    ))
    .catch(error => {
        console.error(error);
    })