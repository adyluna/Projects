const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, idade) {
  return species.filter(({ name }) => name === animal)
    .map(({ residents }) => residents)[0].every(({ age }) => age >= idade);
}

module.exports = getAnimalsOlderThan;
