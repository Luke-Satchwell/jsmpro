// Array - forEach - Perfoms action for each element in an array

const names = ['jon', 'jenny', 'johnny'];

// for loop version
// for (let i = 0; i < names.length; i++) {
//   console.log(i, names[i]);
// }

// forEach version
// accepts value + index
// names.forEach((name, i) => {
//   console.log(name, i);
// });

// simplified version
const logTheName = (
  name,
  i // console.log(name, i); // function
) => names.forEach(logTheName); // use function -- return value undefined

// use when
// you want to do something with each element of the array
// Dont use when
//you want to stop or brak the loop when condition is met
// working wiht async code

// Use Case
let sum = 0;
const numbers = [65, 44, 12, 4];

numbers.forEach((number) => {
  sum += number;
});

// console.log(sum);
