const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find(({ id: idEmployee }) => id === idEmployee);
  const specie = data.species.find(({ id: idSpecie }) => idSpecie === employee.responsibleFor[0]);
  const oldestAnimal = specie.residents
    .reduce((prev, curr) => {
      if (prev.age < curr.age) return curr;
      return prev;
    });
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
