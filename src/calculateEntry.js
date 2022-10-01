const data = require('../data/zoo_data');

const { prices } = data;
const { child } = prices;
const { adult } = prices;
const { senior } = prices;

function countEntrants(entrant) {
  const numberVisitors = {
    adult: 0,
    child: 0,
    senior: 0,
  };
  entrant.forEach((element) => {
    if (element.age < 18) {
      numberVisitors.child += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      numberVisitors.adult += 1;
    }
    if (element.age >= 50) {
      numberVisitors.senior += 1;
    }
  });
  return numberVisitors;
}

function calculateEntry(entrant) {
  if (entrant === undefined) {
    return 0;
  }
  if (entrant[0] === undefined) {
    return 0;
  }
  const costumer = countEntrants(entrant);
  return (costumer.child * child) + (costumer.adult * adult) + (costumer.senior * senior);
}

module.exports = { calculateEntry, countEntrants };
