// Object Methods

const dog = {
  name: 'Fluffy',
  //   myMethod: () => {},
  bark: function () {
    // this
    console.log(this.name);
    console.log('Woof Woof');
  },
};

dog.bark();

// methods used directly on Object constructor

//Object.keys()-- Creates an array containing the keys of an object
const employees = {
  boss: 'Michael',
  secretary: 'Pam',
  sales: 'Jim',
  accountant: 'Oscar',
};

const positions = Object.keys(employees);
console.log(positions);

// Object.values -- creates an array of object values
const session = {
  id: 1,
  time: `26-july-2018`,
  device: 'mobile',
  broswer: 'Chrome',
};

const sessionInfo = Object.values(session);
console.log(sessionInfo);

// Object.entries() -- creates an array of key/value pairs of an object

const operatingSystem = {
  name: 'Ubuntu',
  version: '18.04',
  license: 'Open Source',
};

const entries = Object.entries(operatingSystem);
console.log(entries);

// Loop through results
entries.forEach((entry) => {
  let key = entry[0];
  let value = entry[1];
  console.log(`${key}: ${value}`);
});

// Object.freeze() prevents modification
// to properties and values of an object
// and prevents properties from being added or removed from an object

const user = {
  username: 'John',
  password: 123123,
};

const admin = Object.freeze(user);

// Object.seal() prevents new properties
// from being added to an object
// but allows modification of existing properties

const newUser = Object.seal(user);
