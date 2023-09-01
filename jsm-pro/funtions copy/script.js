// Block of code => Perfoms a task

// function declaration (defining function)
// function square(number) {
//   return number * number;
// }

// function call (invoking/executing a function)
// console.log(square(5));

// A function declaration
// function name(params) {
//   //statements
//   // have access to this keyword
// }

// // A funtion expression
// const name = function (params) {
//   // statements
// };

// // An Arrow function
// const name = (params) => {
//   // statements
// };

// name()

// function sayHi(name) {
//   console.log(`Hi, ${name}`);
// }

// sayHi(`Joe`);

// Returns undefined

// function test() {
//   return true;
//   return false;
// }

// const bool = test();
// console.log(bool);

// Arrow Function
// const square = (number) => {
// return number * number;
// };
// // can omit () if only 1 param, single return can omit block like below
// const square1 = (number) => number * number;

// const res = square(5);
// console.log(res);
// const res1 = square(5);
// console.log(res1);

// Parameters - used when defining function
// Arguments - passed whrn making function call
const add = (a = 0, b = 0) => a + b;
console.log(add(2));
