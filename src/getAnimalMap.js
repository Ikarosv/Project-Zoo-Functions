const data = require('../data/zoo_data');

function animalNames(animals) {
  return animals.map(({ name }) => name);
}

function filterSex(sex, animal, residents) {
  return residents.filter((name, index) =>
    name === animal.residents[index].name && animal.residents[index].sex === sex);
}

function switchOptions(animal, options = []) {
  const info = {};
  if (options.includeNames) {
    info[animal.name] = animalNames(animal.residents);
  } else {
    return animal.name;
  }
  if (options.sex && options.includeNames) {
    info[animal.name] = filterSex(options.sex, animal, info[animal.name]);
  }
  if (options.sorted) {
    info[animal.name].sort();
  }
  return info;
}

function getAnimalMap(options) {
  const loc = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach((animal) => {
    if (options) {
      loc[animal.location].push(switchOptions(animal, options));
      return;
    }
    loc[animal.location].push(animal.name);
  });
  return loc;
}

module.exports = getAnimalMap;
