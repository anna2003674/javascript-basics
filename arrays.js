// push
const people = [];
people.push("Tom");
people.push("Sam");
people.push("Bob", "Mike");

console.log("В массиве people элементов: ", people.length);
console.log(people);

// unshift
const people1 = ["Bob"];
people.unshift("Alice");
console.log(people1);
people.unshift("Tom", "Sam");
console.log(people1);

const people2 = ["Tom", "Sam", "Bob"];
people.splice(1, 0, "Alice");
console.log(people2);

const people3 = ["Tom", "Sam", "Bob"];
people.splice(1, 0, "Alice", "Alex", "Kate");
console.log(people3);

// pop
const people4 = ["Tom", "Sam", "Bob", "Mike"];
const lastPerson = people4.pop();
console.log(lastPerson);
console.log(people4);

// shift
const people5 = ["Tom", "Sam", "Bob", "Mike"];
const first = people5.shift();
console.log(first);
console.log(people5);

// splice
const people6 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
const deleted = people6.splice(3);
console.log(deleted);
console.log(people6);

// slice
const users = ["Tom", "Sam", "Bill"];
console.log(users);
const people7 = users;
people7[1] = "Mike";
console.log(users);

// concat
const men = ["Tom", "Sam", "Bob"];
const women = ["Alice", "Kate"];
const p = men.concat(women);
console.log(p);

// join
const people7 = ["Tom", "Sam", "Bob"];
const peopleToString = people7.join("; ");
console.log(peopleToString);

// sort
const people8 = ["Tom", "Sam", "Bob"];
people8.sort();
console.log(people8);

// reverse
const people9 = ["Tom", "Sam", "Bob"];
people9.reverse();
console.log(people9);

const people10 = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
const firstIndex = people10.indexOf("Tom");
const lastIndex = people10.lastIndexOf("Tom");
const otherIndex = people10.indexOf("Mike");
console.log(firstIndex);
console.log(lastIndex);
console.log(otherIndex);

// includes
const people11 = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
console.log(people11.includes("Tom"));
console.log(people11.includes("Kate"));

// every
const numbers = [1, -12, 8, -4, 25, 42];
const passed = numbers.every((n) => n > 0);
console.log(passed);

// some
const numbers1 = [1, -12, 8, -4, 25, 42];
const passed1 = numbers1.some((n) => n > 0);
console.log(passed1);

// filter
const numbers2 = [1, -12, 8, -4, 25, 42];
const filteredNumbers = numbers2.filter((n) => n > 0);
console.log(filteredNumbers);

// forEach
const numbers3 = [1, 2, 3, 4, 5, 6];
numbers3.forEach((n) => console.log("Квадрат числа", n, "равен", n * n));

// map
const numbers4 = [1, 2, 3, 4, 5, 6];
const squares = numbers4.map((n) => n * n);
console.log(squares);

// find
const numbers5 = [1, 2, 3, 5, 8, 13, 21, 34];
let found = numbers5.find((n) => n > 10);
console.log(found);

// findLast
const numbers6 = [1, 2, 3, 5, 8, 13, 21, 34];
let found2 = numbers6.find((n) => n < 10);
console.log(found2);

// reduce
const numbers7 = [1, 2, 3, 4, 5];
const sum = numbers7.reduce((prev, current) => (prev += current));
console.log(sum);
