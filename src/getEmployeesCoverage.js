const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

function employee(nameId) {
  return employees.filter((element) =>
    element.firstName === Object.values(nameId)[0]
    || element.lastName === Object.values(nameId)[0]
    || element.id === Object.values(nameId)[0]);
}

function specie(value) {
  const animal = [];
  employees.filter(({ id }) => id === employee({ id: value })[0].id)[0]
    .responsibleFor.forEach((element) => species.forEach((ani) => {
      if (ani.id === element) {
        animal.push(ani.name);
      }
    }));
  return animal;
}

function state(value) {
  const states = [];
  employees.filter(({ id }) => id === employee({ id: value })[0].id)[0]
    .responsibleFor.forEach((element) => species.forEach((ani) => {
      if (ani.id === element) {
        states.push(ani.location);
      }
    }));
  return states;
}

const allAnimal = () => employees.map((student) => (
  {
    id: student.id,
    fullName: `${student.firstName} ${student.lastName}`,
    species: specie(student.id),
    locations: state(student.id),
  }
));

function getEmployeesCoverage(object) {
  if (object === undefined) {
    return allAnimal();
  }

  if (employee(object).length === 0) {
    throw new Error('Informações inválidas');
  }
  return {
    id: employee(object)[0].id,
    fullName: `${employee(object)[0].firstName} ${employee(object)[0].lastName}`,
    species: specie(employee(object)[0].id),
    locations: state(employee(object)[0].id),
  };
}

module.exports = getEmployeesCoverage;
