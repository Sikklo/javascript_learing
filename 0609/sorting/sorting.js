// let fruits = ["apple", "orange", "banana", "grape", "tomato"];

let numbers = [1, 2, 88, 44, 77, 22, 884, 1235];

// fruits.sort();
// console.log(fruits);
// numbers.sort((a, b) => a - b); //小到大排序 a,b跟reduce依樣會先是前兩個字 然後一個一個去比較 也就是第一步 a=1,b=2 然後a-b得出來如果是負數 代表a<b 所以小的排前面
numbers.sort((a, b) => b - a);//倒過來就會變成大到小
console.log(numbers);


const people = [{ name: "SpongeBob", age: 25, gpa: 3.0 },
{ name: "Patric", age: 26, gpa: 2.6 },
{ name: "Squidward", age: 27, gpa: 3.4 },
{ name: "Sandy", age: 24, gpa: 4.0 }
];
// people.sort((a, b) => b.age - a.age);
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);