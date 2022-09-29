const data = require('../data/zoo_data');

function countAnimals({ specie, sex } = { specie: 'all', sex: 'all' }) {
  return data.species.reduce((total, currentSpecie) => {
    if (specie === 'all') {
      const animal = { ...total };
      animal[currentSpecie.name] = currentSpecie.residents.length;
      return animal;
    }
    if (currentSpecie.name === specie) {
      if (sex) {
        return currentSpecie.residents
          .filter(({ sex: sexAnimal }) => sexAnimal === sex).length;
      }
      return currentSpecie.residents.length;
    }
    return total;
  }, {});
}

module.exports = countAnimals;
