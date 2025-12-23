// Типы данных

// Number
const x = 45;
const y = 123.897;
const z = -0.123;

// BigInt
let num1 = 9223372036854775801n;

// Boolean
const isAlive = true;
const isDead = false;

// String
const user = "Tom";
const company = "Microsoft";
const language = `JavaScript`;

console.log(user);
console.log(company);
console.log(language);

const company1 = 'Бюро "Рога и копыта"';
const company3 = "Бюро 'Рога и копыта'";

// Интерполяция
const us = "Tom";
const age = 37;
const isMarried = false;
const text = `Name: ${us}   Age: ${age}   IsMarried: ${isMarried}`;
console.log(text); // Name: Tom   Age: 37   IsMarried: false

// Undefined и Null
let email1;
console.log(email1); // undefined

let email2;
console.log(email2); // undefined
email2 = null;
console.log(email2); // null

let email = "tome@mimimail.com";
email = undefined; // тип undefined
console.log(email); // undefined

// Object
const user1 = {
  name: "Tom",
  age: 24,
};
console.log(user1.name);
console.log(user1.age);

const numbers = [1, 2, 3, 4, 5];

function greet() {
  console.log("Hello");
}

const today = new Date();

const pattern = /abc/;

// Symbol
const symbol = Symbol("description");
