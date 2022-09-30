const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  let chosenEmployee = {};
  employees.forEach(({ firstName, lastName }, index) => {
    if (firstName === employeeName || lastName === employeeName) {
      chosenEmployee = employees[index];
    }
  });
  return chosenEmployee;
}

module.exports = getEmployeeByName;
