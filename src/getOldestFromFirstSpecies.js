const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getEmployee = (id) => employees.find((element) => element.id === id);

function getAnimal(id) {
  return species.find((element) => element.id === id);
}
// .residents.reduce((acc, curr, index) => {
//   return acc > curr.age ? acc : curr.age;
// }, 0);
// }

function getOldestFromFirstSpecies(id) {
  return getAnimal(getEmployee(id).responsibleFor[0]);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
