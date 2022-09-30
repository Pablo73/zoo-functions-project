const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, valueMinAge) {
  return species.find((element) => element.name === animal)
    .residents.every(({ age }) => valueMinAge <= age);
}

module.exports = getAnimalsOlderThan;
