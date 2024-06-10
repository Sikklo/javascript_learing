const fruits = [{ name: "apple", color: "red", calories: 95 },
{ name: "orange", color: "orange", calories: 105 },
{ name: "banana", color: "yellow", calories: 155 },
{ name: "kiwi", color: "dark_green", calories: 200 },
{ name: "tomato", color: "red", calories: 140 }];


fruits.push({ name: "grava", color: "green", calories: 88 });
// fruits.splice(1, 2);//把fruits的[1]和[2]先踢出
// fruits.forEach(fruits => console.log(fruits.name));
// const fruit_names = fruits.map(fruit => fruit.name);
// console.log(fruit_names);

// const yellow_fruit = fruits.filter(fruit => fruit.color === "yellow");
// const calorie_under100 = fruits.filter(fruit => fruit.calories < 100);
// console.log(calorie_under100);
// console.log(yellow_fruit);

const highest_calories_fruit = fruits.reduce((max, comp) =>
    comp.calories > max.calories ? comp : max);
console.log(highest_calories_fruit);
