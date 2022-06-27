const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

const getEmployees = (employee) => employees
  .find(({ id, firstName, lastName }) => Object.values(employee).includes(id)
    || Object.values(employee).includes(firstName)
    || Object.values(employee).includes(lastName));

const speciesName = (employee) => {
  const speciesFound = getEmployees(employee).responsibleFor;
  return species.filter(({ id }) => speciesFound.includes(id)).map(({ name }) => name);
};

const getLocations = (employee) => {
  const speciesNames = speciesName(employee);
  return species.map(({ name, location }) => {
    if (speciesNames.includes(name)) {
      return location;
    } return undefined;
  }).filter((elem) => elem !== undefined);
};

const employeeObject = (employee) => ({
  id: getEmployees(employee).id,
  fullName: `${getEmployees(employee).firstName} ${getEmployees(employee).lastName}`,
  species: speciesName(employee),
  locations: getLocations(employee),
});

const getAllEmployees = () => employees.map((employee) => employeeObject(employee));

const getEmployeesCoverage = (employee) => {
  if (!employee) {
    return getAllEmployees();
  }
  if (getEmployees(employee) === undefined) {
    throw new Error('Informações inválidas');
  } return employeeObject(employee);
};

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
