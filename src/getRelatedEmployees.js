const data = require('../data/zoo_data');

const { employees } = data;

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

const allManagers = [stephanieId, olaId, burlId];

function isManager(managerId) {
  return allManagers.some((element) => element === managerId);
}

function getRelatedEmployees(managerId) {
  const subordinates = [];
  if (isManager(managerId) === true) {
    employees.forEach(({ managers }, index) => {
      if (managers[0] === managerId) {
        subordinates.push(`${employees[index].firstName} ${employees[index].lastName}`);
      }
    });
    return subordinates;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
