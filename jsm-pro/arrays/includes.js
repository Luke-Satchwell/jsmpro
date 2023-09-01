// Array includes
// Checks if array contains value returns true/false

// case sensitive

const array1 = [1, 2, 3];
const pets = ['cat', 'dog', 'llama'];

console.log(array1.includes(2));
console.log(pets.includes('zebra'));

const bookshelf = ['Moby dick', 'The Great Gatsby', 'Pride and Prejudice'];

if (bookshelf.includes('Moby dick')) {
  console.log('We have that book');
} else {
  console.log('Cannot find the book');
}
