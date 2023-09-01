// Array reduce

const groceryList = [29, 12, 45, 35, 87, 110];

// not using reduce
// let sum = 0;

// groceryList.forEach((item) => (sum += item));
// console.log(sum);

// USING REDUCE

// groceryList.reduce((accumalator, currentValue) =>{}, 0)
const total = groceryList.reduce((accumalator, currentValue) => {
  return accumalator + currentValue;
}, 0);

console.log(total);

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, val) => acc + val, 0);

console.log(sum);

// acc = 0, val = 1 => 0 + 1 === 1  <= acc
// acc = 1, val = 2 => 1 + 2 === 3  <= acc
// acc = 3, val = 3 => 3 + 3 === 6  <= acc
