const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const getAnimal = (animal) =>
  species.find((specie) => specie.name === animal);

const getDay = (day) =>
  Object.keys(hours).find((element) => element === day);

const animalDayWeek = (day) => {
  const animal = [];
  species.forEach(({ name }) =>
    getAnimal(name).availability.forEach((element) => {
      if (element === day) {
        animal.push(name);
      }
    }));
  return animal;
};

function days(value) {
  const object = {};
  object[value] = { officeHour:
  value === 'Monday' ? 'CLOSED' : `Open from ${hours[value].open}am until ${hours[value].close}pm`,
  exhibition: value === 'Monday' ? 'The zoo will be closed!' : animalDayWeek(value),
  };
  return object;
}

function office() {
  const object = {};
  Object.keys(hours).forEach((day) => {
    object[day] = { officeHour:
      day === 'Monday' ? 'CLOSED' : `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: day === 'Monday' ? 'The zoo will be closed!' : animalDayWeek(day),
    };
  });
  return object;
}

function getSchedule(scheduleTarget) {
  if (species.some((specie) => specie.name === scheduleTarget)) {
    return getAnimal(scheduleTarget).availability;
  }
  if (scheduleTarget === undefined) {
    return office();
  }
  if (getAnimal(scheduleTarget) === undefined && getDay(scheduleTarget) === undefined) {
    return office();
  }
  return days(scheduleTarget);
}

module.exports = getSchedule;
