// object is an unordered collection
// of related data
// in form of key : value pairs

// object can also use variables as values
const person = {
  firstName: 'Tom', // key : value
  lastName: 'Cruise',
  age: 40,
  car: {
    brand: 'Toyota',
    year: 2015,
    color: 'red',
  },
};

// DOT Notation - access individual properties
console.log(person.firstName);
// add to object via DOT Notation
person.dog = { name: 'Fluffy', age: 2 };
console.log(person);

// Square Bracket Notation
const property = 'age';
console.log(person[property]); // logs the age property from the object
