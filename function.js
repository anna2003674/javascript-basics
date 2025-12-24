function hello1() {
  console.log("Hello");
}
hello();
hello();
hello();

function hello2() {
  console.log("Hello");
}
const message = hello;
message();

const mess = function () {
  console.log("Hello JavaScript");
};
mess();

function print() {
  printHello();
  printHello();
  printHello();

  function printHello() {
    console.log("Hello");
  }
}
print();
printHello(); // Uncaught ReferenceError: printHello is not defined

function printHello(message) {
  console.log(message);
}
print("Hello JavaScript");
print("Hello METANIT.COM");
print("Function in JavaScript");

function sum(a, b) {
  const result = a + b;
  console.log(result);
}
sum(2, 6);
sum(4, 5);
sum(109, 11);

function display(season, ...temps) {
  console.log(season);
  for (index in temps) {
    console.log(temps[index]);
  }
}
display("Весна", -2, -3, 4, 2, 5);
display("Лето", 20, 23, 31);

function summa(numbers) {
  let result = 0;
  for (const n of numbers) result += n;
  console.log("result =", result);
}
const nums = [6, 4, 5, 8];
summa(nums);

function rectangle(width, height) {
  const perimeter = width * 2 + height * 2;
  const area = width * height;
  return [perimeter, area];
}

const rectangleData = rectangle(20, 30);
console.log(rectangleData[0]);
console.log(rectangleData[1]);

function menu(n) {
  if (n == 1)
    return function (x, y) {
      return x + y;
    };
  else if (n == 2)
    return function (x, y) {
      return x - y;
    };
  else if (n == 3)
    return function (x, y) {
      return x * y;
    };
  return function () {
    return 0;
  };
}

const action = menu(1);
const result = action(2, 5);
console.log(result);

const myFunction = () => console.log("Hello");
myFunction();

const print = (mes) => console.log(mes);
print("Hello");
print("Welcome to JavaScript");

const sum = (x, y) => console.log("Sum =", x + y);
sum(1, 2);
sum(4, 3);
sum(103, 2);

const helloFunction = (name) => `Hello, ${name}`;
console.log(helloFunction("Tom"));
console.log(helloFunction("Bob"));
console.log(helloFunction("Frodo Baggins"));

const user = (userName, userAge) => ({ name: userName, age: userAge });
let tom = user("Tom", 34);
let bob = user("Bob", 25);
console.log(tom.name, tom.age);
console.log(bob.name, bob.age);

const square = (n) => {
  const result = n * n;
  console.log(result);
};
square(5);
square(6);
