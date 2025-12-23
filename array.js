const myArray = [];

const people = ["Tom", "Alice", "Sam"];
console.log(people);

console.log(people[0]);
const person3 = people[2];
console.log(person3);

console.log(people[7]); // undefined

console.log(people[0]); // Tom
people[0] = "Bob";
console.log(people[0]); // Bob

console.log(people[7]); // undefined - в массиве только три элемента
people[7] = "Bob";
console.log(people[7]); // Bob

const objects = ["Tom", 12, true, 3.14, false];
console.log(objects);

const numbers1 = [0, 1, 2, 3, 4, 5];
const numbers2 = [
  [0, 1, 2],
  [3, 4, 5],
];

const people = [
  ["Tom", 25, false],
  ["Bill", 38, true],
  ["Alice", 21, false],
];

console.log(people[0]);
console.log(people[1]);
console.log("Имя: ", people[0][0]);
console.log("Возраст: ", people[0][1]);
