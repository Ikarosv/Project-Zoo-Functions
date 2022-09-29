const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((totalEntrants, { age }) => {
    const obj = { ...totalEntrants };
    if (age < 18) {
      obj.child += 1;
    } else if (age >= 18 && age < 50) {
      obj.adult += 1;
    } else if (age >= 50) {
      obj.senior += 1;
    }
    return obj;
  }, { adult: 0, child: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  return Object.entries(countEntrants(entrants))
    .reduce((total, currArr) => total + data.prices[currArr[0]] * currArr[1], 0);
}

module.exports = { calculateEntry, countEntrants };
