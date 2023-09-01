const array = [1, 2, 3, 4, 5];

// Array Some => returns true if 1 element passes the test
const greaterThan3 = (number) => number > 3;
console.log(array.some(greaterThan3)); // true/false
console.log(array.some((el) => el > 3));

// Array Every => true if all elements pass the test
console.log(array.every((el) => el > 3));
// is every element
