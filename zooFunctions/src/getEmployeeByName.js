const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (name) => {
  const getEmployees = employees
    .filter(({ firstName, lastName }) => firstName === name || lastName === name);
  if (name === undefined) {
    return {};
  }
  if (getEmployees.length === 1) {
    return getEmployees[0];
  } return getEmployees;
};

console.log(getEmployeeByName('Sharonda'));

module.exports = getEmployeeByName;
