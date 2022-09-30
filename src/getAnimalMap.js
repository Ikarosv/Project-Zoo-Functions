const data = require('../data/zoo_data');

function animalNames(animals) {
  return animals.map(({ name }) => name);
}

function filterSex(sex, animals, residents) {
  return residents.filter((name, index) =>
    name === animals[index].name && sex === animals[index].sex);
}

function switchOptions({ name, residents }, options) {
  const info = {};
  if (options.includeNames) {
    info[name] = animalNames(residents);
  } else {
    return name;
  }
  if (options.sex) {
    info[name] = filterSex(options.sex, residents, info[name]);
  }
  if (options.sorted) {
    info[name].sort();
  }
  return info;
}

function getAnimalMap(options) {
  return data.species.reduce((loc, animal) => {
    if (options) {
      loc[animal.location].push(switchOptions(animal, options));
      return loc;
    }
    loc[animal.location].push(animal.name);
    return loc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

module.exports = getAnimalMap;
