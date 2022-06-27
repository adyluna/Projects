const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

const getOldestFromFirstSpecies = (employeeId) => {
  const specieId = employees.find(({ id }) => id === employeeId).responsibleFor[0];

  return Object.values(species
    .find(({ id }) => id === specieId).residents
    .reduce((a, b) => (b.age > a.age ? b : a)));
};

module.exports = getOldestFromFirstSpecies;
