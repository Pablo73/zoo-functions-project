const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(anyId) {
  const getEmployee = (id) => employees.find((element) => element.id === anyId).responsibleFor[0];

  const olderAge = species.find((element) => element.id === getEmployee())
    .residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(olderAge);
}

module.exports = getOldestFromFirstSpecies;
