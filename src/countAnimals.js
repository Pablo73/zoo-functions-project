const data = require('../data/zoo_data');

const { species } = data;

const allAnimals = {};

species.forEach(({ name }, index) => { allAnimals[name] = species[index].residents.length; });

const numberOfAnimals = (animal) => {
  let resultNumberOfAnimals = 0;

  species.forEach((element) => {
    if (animal.specie === element.name) {
      resultNumberOfAnimals = element.residents.length;
    }
  });
  return resultNumberOfAnimals;
};

const amountOfSexAnimals = (animal) => {
  let chosenSexQuantity = 0;

  species.forEach((element) => {
    if (animal.specie === element.name) {
      element.residents.forEach(({ sex }) => {
        if (sex === animal.sex) {
          chosenSexQuantity += 1;
        }
      });
    }
  });
  return chosenSexQuantity;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return allAnimals;
  }
  if (animal.sex === undefined) {
    return numberOfAnimals(animal);
  }
  if (amountOfSexAnimals(animal) === 0) {
    return 0;
  }
  if (amountOfSexAnimals(animal) > 0) {
    return numberOfAnimals(animal) - amountOfSexAnimals(animal);
  }
}

module.exports = countAnimals;
