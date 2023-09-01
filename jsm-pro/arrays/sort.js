// Array sort()
// alphabetically
// sorts numbers by first digit

// Mutates original aray

const names = ['Anne', 'Carl', 'Bob', 'Dean'];

names.sort();

console.log(names);

const numbers = [6, 3, 1, 7, 9, 2];

numbers.sort((a, b) => a - b); // will sort ascending b - a will descend
console.log(numbers);
