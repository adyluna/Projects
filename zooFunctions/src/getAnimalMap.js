const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getResidentsWithOptions = (residents, options) => {
  if (Object.keys(options).includes('sex') && Object.keys(options).includes('sorted')) {
    return residents.filter(({ sex }) => sex === options.sex)
      .map(({ name }) => name).sort();
  }
  if (Object.keys(options).includes('sex')) {
    return residents.filter(({ sex }) => sex === options.sex)
      .map(({ name }) => name);
  }
  if (Object.keys(options).includes('sorted')) {
    return residents.map(({ name }) => name).sort();
  } return residents.map(({ name }) => name);
};

const getResidents = (residents, options) => {
  if (options) {
    return getResidentsWithOptions(residents, options);
  } return residents.map(({ name }) => name);
};

const locatedAnimals = (theLocation, options) => {
  if (options) {
    if (!Object.keys(options).includes('includeNames')) {
      return species.filter(({ location }) => location === theLocation).map(({ name }) => name);
    } return species.filter(({ location }) => location === theLocation)
      .map(({ name, residents }) => ({
        [name]: getResidents(residents, options),
      }));
  } return species.filter(({ location }) => location === theLocation).map(({ name }) => name);
};

const createObject = (options) => ({
  NE: locatedAnimals('NE', options),
  NW: locatedAnimals('NW', options),
  SE: locatedAnimals('SE', options),
  SW: locatedAnimals('SW', options),
});

const getAnimalMap = (options) => createObject(options);

module.exports = getAnimalMap;
