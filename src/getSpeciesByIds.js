const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  const animal = [];
  species.forEach(({ id }, index) => {
    ids.forEach((element) => {
      if (id === element) {
        animal.push(species[index]);
      }
    });
  });
  return animal;
}

module.exports = getSpeciesByIds;
