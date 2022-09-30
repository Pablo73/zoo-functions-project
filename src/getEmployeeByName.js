const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  employees.forEach(({ firstName }, index) => firstName === employeeName, employees[index]);
}
getEmployeeByName('Emery');

module.exports = getEmployeeByName;
