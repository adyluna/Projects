const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
const animalNames = species.map(({ name }) => name);
const weekDays = ['Sunday', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday'];
const monday = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const exhibition = (weekday) => species
  .filter(({ availability }) => availability.includes(weekday));

const getSpecificDay = (weekday) => {
  const openClose = Object.values(hours[weekday]);
  return {
    [weekday]: {
      officeHour: `Open from ${openClose[0]}am until ${openClose[1]}pm`,
      exhibition: exhibition(weekday).map(({ name }) => name),
    } };
};

const getDay = () => {
  const weekday = Object.values(hours);
  return Object.keys(hours).reduce((a, v, index) => ({ ...a,
    [v]: {
      officeHour: v === 'Monday'
        ? 'CLOSED' : `Open from ${weekday[index].open}am until ${weekday[index].close}pm`,
      exhibition: v === 'Monday'
        ? 'The zoo will be closed!' : exhibition(v).map(({ name }) => name) } }), {});
};

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') {
    return monday;
  }
  if (animalNames.includes(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  if (weekDays.includes(scheduleTarget)) {
    return getSpecificDay(scheduleTarget);
  }
  return getDay();
};

module.exports = getSchedule;
