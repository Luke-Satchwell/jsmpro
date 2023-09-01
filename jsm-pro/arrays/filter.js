// Array Filter

// filters certain elements from an array

const numbers = [-10, 0, -2, 15, -36, 25];
const positiveNumbers = numbers.filter((number) => number >= 0);

// console.log(positiveNumbers);

const employeesData = [
  { name: 'seb', overtime: 5 },
  { name: 'Cardi', overtime: 10 },
  { name: 'George', overtime: 12 },
];

const employeesToReward = employeesData.filter(
  (employee) => employee.overtime >= 7
);
const employeeNames = employeesToReward.map((employee) => employee.name);

employeeNames.forEach((name) => console.log(`${name} received a reward`));

console.log(employeeNames);
