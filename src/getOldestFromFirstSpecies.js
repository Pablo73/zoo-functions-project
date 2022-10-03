const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getEmployee = (id) => employees.find((element) => element.id === id).responsibleFor[0];

function getAnimal(id) {
  return species.find((element) => element.id === id)
    .residents.reduce((acc, curr) => ((acc > curr.age) ? acc : curr.age));
  // return Object.values(element)
}

function getOldestFromFirstSpecies(id) {
  return getAnimal(getEmployee(id));
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
