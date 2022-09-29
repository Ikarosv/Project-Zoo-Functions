const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids.length) return [];
  return ids.map((idSpecie) => data.species.filter(({ id: idAnimal }) => idAnimal === idSpecie));
}

module.exports = getSpeciesByIds;
