// Scope
// Global Scope
// Can access value from anywhere in file
// useful when multiple functions are accessing the data
// DISADVANTAGES -  any function can cange value of global variable and unexpected results
// const name = 'John';

// const logName = () => {
//   console.log(name);
// };
// logName();
// Local / Function Scope
// const someFunction = () => {
//   // if declared in here local scope #1
//   // only accessible from inside function
//   const name = ' Janny';
// };
//someFunction();
// Block Scope
// if (true) {
//   // Access inside the block not outside use let/const not var
//   const name = 'john';
// }

// ### Hoisting in Javascript
// declarations are lifted to the top of their scope
// always declare variables/funtions before use

//  ### Closures
// * = has acces to variables from the parent scope
// const outer = () => {
//   const outerVar = 'hello';
//   //*
//   const inner = () => {
//     const innerVar = 'hi';
//     console.log(outerVar, innerVar);
//   };
//   return inner;
// };
// const innerFn = outer();
// innerFn();

const init = () => {
  const hobby = 'Learning JavaScript'; // local var created by init function

  const displayHobby = () => {
    // displayHobby is the inner function, a closure
    console.log(hobby); // using var created in parent function
  };
  return displayHobby();
};

init();
