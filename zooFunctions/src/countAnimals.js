const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (obj) => {
  if (!obj) {
    return species.reduce((a, v) => ({ ...a, [v.name]: v.residents.length }), {});
  }
  if (Object.keys(obj).length === 1) {
    return species.find(({ name }) => name === obj.specie).residents.length;
  }
  if (Object.keys(obj).length === 2) {
    return species.find(({ name }) => name === obj.specie).residents
      .filter(({ sex }) => sex === obj.sex).length;
  }
};

module.exports = countAnimals;
