const single = 'This is a string';
const double = 'This is a string';
const backticks = `This is a string`; // allows javascript logic

// \ escapes characters

// String Length and Basic Properties

const name = 'john';
// see length of string
// console.log(name.length);
// get element of string
// console.log(name[0]);

const firstLetter = name[0];
// get last character
const lastLetter = name[name.length - 1];
// console.log(firstLetter, ' ', lastLetter);

// Uppercase and lowercase

const MixedCaseString = 'Hello! How are you?';
const lowerCaseString = MixedCaseString.toLowerCase();
const upperCaseString = MixedCaseString.toUpperCase();

// console.log(MixedCaseString.length);
// console.log(lowerCaseString);
// console.log(upperCaseString);

// Searching for Substring
const hobbies = 'I love HTML, CSS and JavaScript';

// IndexOf()

// Returns the position of the first occurrence of a substring.
// @param searchString — The substring to search for in the string
// @param position — The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
// -1 measn it cannot find substring
const index = hobbies.indexOf('JavaScript');
// console.log(index);

// lastIndexOf()
const lastIndex = hobbies.lastIndexOf('JavaScript');
// console.log(index, lastIndex);

// includes() !important
//returns true or false
// console.log(hobbies.includes('JavaScript'));

// startsWith()
hobbies.startsWith('I');
// endsWith()
hobbies.endsWith('.');

// Getting a Substring

const egString = 'hotdog';
// slice();
const dog = egString.slice(3);
// console.log(dog);

// Split a string
const exampleString = 'dog';
const exampleString2 = 'the quick brown fox jumps over the lazy dog';
//split()
// console.log(exampleString.split('')); //return array of the letter
// console.log(exampleString2.split(' ')); //return array of the words separated by a space

// Reverse, Repeat, Trim

// Reverse/join is an array method
const egString2 = 'test'; //
const reversedString = egString2.split('').reverse().join('');
// console.log(reversedString);

// Repeat
const repeatedString = egString2.repeat(3);
// console.log(repeatedString);

// trim()
const egString3 = '  Hello world   ';
// console.log(egString3.trim()); // useful for forms
