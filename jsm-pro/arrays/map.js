// Array map

// allocates memory to store returned value

const inventory = [
  { price: 5, name: 'eggs' },
  { price: 4, name: 'ham' },
  { price: 3, name: 'mayo' },
  { price: 5, name: 'bread' },
];

const prices = inventory.map((item) => item.price);
const items = inventory.map((item) => item.name);
// console.log(prices);
// console.log(items);
