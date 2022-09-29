const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids.length) return [];
  return ids.reduce((animals, idSpecie) => animals
    .concat(data.species.filter(({ id: idAnimal }) => idAnimal === idSpecie)), []);
}
/* data.species.reduce((animals, currentAnimal) => {
    if (id === currentAnimal.id) {
      animals.push(currentAnimal);
      return animals;
    }
    return animals;
  }, []) */
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
