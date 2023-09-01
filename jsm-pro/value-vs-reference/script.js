// JavaScript differentiatees Data Types on:

// - Primitive values(Number, String, Boolean ...)
// - Complex values (Objects, Arrays)

// e.g.1
// const animals = ['dogs', 'cats'];

// const otherAnimals = animals;

// animals.push('llamas');

// console.log(animals);
// console.log(otherAnimals);

// PERSON AND OTHER PERSON POINT TO THE !SAME LOCATION IN THE MEMORY
//e.g.2
// const person = {
//   firstName: 'John',
//   lastName: 'Snow',
// };

// const otherPerson = person;

// person.firstName = 'Johnny';

// console.log(person);
// console.log(otherPerson);

// const person = { name: 'Jon' };
// const otherPerson = person;

// console.log(person === otherPerson);

// objects are copied by reference
// primitive data types are copied by values

// CLONING Arrays

// 1st - spread operator
// const numbers = [1, 2, 3, 4, 5];
// const copiedNumbers = numbers;
// const newNumbers = [...numbers]; // has a different place in the memory so not affecxted by the below .push

// numbers.push(6);

// console.log(...numbers);
// console.log(copiedNumbers);
// console.log(newNumbers);

// 2nd - Array Slice

const numbers = [1, 2, 3, 4, 5];
const copiedNumbers = numbers;
const newNumbers = numbers.slice();

numbers.push(6);

console.log(...numbers);
console.log(copiedNumbers);
console.log(newNumbers);

// CLONING OBJECTS

// spread operator
// const person = { name: 'John', age: 20 };
// const otherPerson = { ...person };

// person.age = 22;

// console.log(person);
// console.log(otherPerson);

// Object.assign

const person = { name: 'John', age: 20 };
const otherPerson = Object.assign({}, person);

person.age = 22;

console.log(person);
console.log(otherPerson);
