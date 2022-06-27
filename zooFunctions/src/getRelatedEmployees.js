const data = require('../data/zoo_data');

const { employees } = data;
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(identification) {
  const findManager = employees.find(({ id }) => id === identification);
  if (findManager.id === stephanieId
    || findManager.id === olaId || findManager.id === burlId) {
    return true;
  } return false;
}

function getRelatedEmployees(managerId) {
  const getManagers = employees.filter(({ managers }) => managers.includes(managerId));
  if (isManager(managerId)) {
    return getManagers.map((elem) => `${elem.firstName} ${elem.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
