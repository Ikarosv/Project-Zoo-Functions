const data = require('../data/zoo_data');

function returnOfficeHour(opens) {
  return opens.open ? `Open from ${opens.open}am until ${opens.close}pm` : 'CLOSED';
}

function animals(day) {
  const saida = data.species.reduce((dayAnimals, currAnimal) => {
    if (currAnimal.availability.includes(day)) {
      dayAnimals.push(currAnimal.name);
    }
    return dayAnimals;
  }, []);
  return saida.length !== 0 ? saida : 'The zoo will be closed!';
}

function formObj(day, opens) {
  return {
    officeHour: returnOfficeHour(opens),
    exhibition: animals(day),
  };
}

function getSchedule(scheduleTarget) {
  const days = Object.entries(data.hours);
  const objFinal = {};
  if (data.hours[scheduleTarget]) {
    objFinal[scheduleTarget] = formObj(scheduleTarget, data.hours[scheduleTarget]);
    return objFinal;
  }
  const animal = data.species.find(({ name: nameAnimal }) => nameAnimal === scheduleTarget);
  if (animal) return animal.availability;
  days.forEach(([day, opens]) => {
    objFinal[day] = formObj(day, opens);
  });
  return objFinal;
}

module.exports = getSchedule;
