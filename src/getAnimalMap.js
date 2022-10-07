const data = require('../data/zoo_data');

const { species } = data;

const geographicMapping = () => {
  const animalRegion = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((value) => Object.keys(animalRegion).forEach((element) => {
    if (value.location === element) {
      animalRegion[value.location].push(value.name);
    }
  }));
  return animalRegion;
};

function nameAnimal(animal) {
  return species.filter((element) => animal === element.name)[0].residents
    .map((residents) => residents.name);
}

function nameAnimalSex(animal, sexs) {
  const name = [];
  species.filter((element) => animal === element.name)[0].residents
    .forEach((residents) => {
      if (residents.sex === sexs) {
        name.push(residents.name);
      }
    });
  return name;
}

const allGeographicMappingSex = (sex) => {
  const animalRegion = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((value) => Object.keys(animalRegion).forEach((element) => {
    if (value.location === element) {
      animalRegion[value.location].push({ [value.name]: nameAnimalSex(value.name, sex) });
    }
  }));
  return animalRegion;
};

const allGeographicMappingSexAlphabeticalOrder = (sex) => {
  const animalRegion = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((value) => Object.keys(animalRegion).forEach((element) => {
    if (value.location === element) {
      animalRegion[value.location].push({ [value.name]: nameAnimalSex(value.name, sex).sort() });
    }
  }));
  return animalRegion;
};

const allGeographicMapping = (animal) => {
  const animalRegion = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((value) => Object.keys(animalRegion).forEach((element) => {
    if (value.location === element) {
      animalRegion[value.location].push({ [value.name]: nameAnimal(value.name) });
    }
  }));
  return animalRegion;
};

const allGeographicMappingAlphabeticalOrder = (animal) => {
  const animalRegion = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((value) => Object.keys(animalRegion).forEach((element) => {
    if (value.location === element) {
      animalRegion[value.location].push({ [value.name]: nameAnimal(value.name).sort() });
    }
  }));
  return animalRegion;
};

const includeNames = (includeName) => {
  if (Object.keys(includeName)[1] === undefined) {
    return allGeographicMapping();
  }
  if (Object.keys(includeName)[1] === 'sorted') {
    return allGeographicMappingAlphabeticalOrder();
  }
  if (Object.keys(includeName)[2] === 'sorted') {
    return allGeographicMappingSexAlphabeticalOrder(includeName.sex);
  }
  return allGeographicMappingSex(includeName.sex);
};

function getAnimalMap(...options) {
  if (options.length === 0) {
    return geographicMapping();
  }
  if (options[0].includeNames === true) {
    return includeNames(...options);
  }
  return geographicMapping();
}

module.exports = getAnimalMap;
