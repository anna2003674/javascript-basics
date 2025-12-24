{
  var a = 5;
  let b = 8;
  const c = 9;
}

function print() {
  var a = 5;
  let b = 8;
  const c = 9;
  console.log("Function print: a =", a);
  console.log("Function print: b =", b);
  console.log("Function print: c =", c);
}
print();
console.log("Global: a =", a); // Uncaught ReferenceError: a is not defined

{
  var a = 5;
}
console.log("a =", a);

if (true) {
  var b = 6;
}
console.log("b =", b);

for (let i = 0; i < 5; i++) {
  var c = 7;
}
console.log("c =", c);

var z = 89;
function print() {
  var z = 10;
  console.log(z);
}
print();

function displayZ() {
  var z = 20;
  {
    var z = 30;
    console.log("Block:", z);
  }
  console.log("Function:", z);
}
displayZ();
