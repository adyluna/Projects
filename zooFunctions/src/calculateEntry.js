const data = require('../data/zoo_data');

const { prices } = data;
const adultPrice = prices.adult;
const seniorPrice = prices.senior;
const childPrice = prices.child;

const countEntrants = (entrants) => {
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
};

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  } return countEntrants(entrants).adult * adultPrice
    + countEntrants(entrants).child * childPrice
    + countEntrants(entrants).senior * seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
