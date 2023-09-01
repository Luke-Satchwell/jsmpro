const months = ['January', 'February', 'March', 'April'];

// add item to array that doesnt exist
months[4] = 'May';
// console.log(months.length);

// values that can be stored inside an array
const values = [
  'Apple', // strings
  { name: 'john' }, // Objects
  true, // boolean
  () => {}, //Functions
];

// console.log(values);

// Iterate over Array

for (let i = 0; i < months.length; i++) {
  // console.log(months[i]);
}

// Array preMade functions

const names = ['Jon', 'Bob', 'David', 'Mark'];

// Array Push - Adds new element of entered value to the end of array
names.push('Dean'); // returns length of array when value is pushed
// console.log(names);

// Array Pop - Deletes the last element of an array
names.pop();
// console.log(names);

// Array Shift - Deletes first value and moves the remainder backwards
names.shift();

//Array Unshift -  Adds a new value to start of array
names.unshift('Dean');
// console.log(names);

// Array Splice -  Adds/removes values from any position of an array
names.splice(2, 0, 'Jenny', 'Johnny'); // params where to start - what to remove - values to add
// console.log(names);

// Array Slice - copies parts of an array into a new array
const noOneLikesJon = names.slice(0);
// console.log(noOneLikesJon);
