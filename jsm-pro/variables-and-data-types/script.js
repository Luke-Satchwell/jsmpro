// create variable using var key word
// var varaibleName = 'Welcome to variabless';

// create variable using let key word
let variablename = "This is a let variable";

// create variable using const key word
const constVariable = "This is a const Variable";


// variable naming
// 1-should be unique
// 2- should not be a reserved keyword
// 3- the name must start wi a character, _ or a $
// console.log(variableName);
console.log(constVariable);

// String

//quote with single quotes
const singleQuotes = 'Hello!';

// string with double quotes
const doubleQuotes = 'A string with double quotes!';

// string with backTicks
const name = "Jane";
const backTicks = `this is a string with backTicks!!! ${name}`;

console.log(typeof backTicks);

// Numbers
const wholeNumber = 954;
const decimalNumber = 0.25;

const result = wholeNumber / decimalNumber;
console.log(typeof result);


// Booleans
// true
// or
// false
const age= 20;
console.log(age > 18);

// Null
let nullAge = null;
// dont know the value yet
console.log(nullAge); //typeof object !!!

//Undefined
// value is not assigned
let x;
console.log(typeof x);


// Objects
//the only complex data type

const person = {name:"john", age:25};
console.log(person);

// dot notation is used to extract specific properties of an object
console.log(person.age);

// Array
const arr = [1,2,3,4]
console.log(arr);

const date = new Date()
console.log(date);


// Statically typed
let message = "Hello World"
console.log(typeof message);
message = 5
console.log(typeof message);
// Dynamically typed




