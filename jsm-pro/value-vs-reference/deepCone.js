const person = {
  firstname: 'Emma',
  car: {
    brand: 'BMW',
    color: 'blue',
    wheels: 4,
  },
};

// const newPerson = { ...person, car: { ...person.car } }; // remove reference from inner object

// newPerson.firstname = 'Mia';
// newPerson.car.color = 'red';

// console.log(person);
// console.log(newPerson);

// deep clone need to destroy all references

// JSON.Stingify

const newPerson = JSON.parse(JSON.stringify(person));

newPerson.firstname = 'Mia';
newPerson.car.color = 'red';
console.log(newPerson);
