const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data; return species.filter(({ id }) => ids.includes(id));
}

module.exports = getSpeciesByIds;
