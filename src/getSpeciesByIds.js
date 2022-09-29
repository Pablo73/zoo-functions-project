const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const species = [];
  data.species.forEach(({ id }, index) => {
    ids.forEach((element) => {
      if (id === element) {
        species.push(data.species[index]);
      }
    });
  });
  return species;
}

module.exports = getSpeciesByIds;
