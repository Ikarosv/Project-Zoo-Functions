const data = require('../data/zoo_data');

const findEmployee = (search) => data.employees.find(({ firstName, lastName, id }) =>
  firstName === search || lastName === search || id === search);

const speciesAndLocation = (responsibleFor) => {
  const specieNames = [];
  const locations = [];

  responsibleFor.forEach((employeeSpecieId) => {
    const animal = data.species.find(({ id: specieId }) => specieId === employeeSpecieId);
    locations.push(animal.location);
    specieNames.push(animal.name);
  });

  return [specieNames, locations];
};

const createObj = ({ id, firstName, lastName, responsibleFor }) => {
  const [species, locations] = speciesAndLocation(responsibleFor);
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species,
    locations,
  };
};

function getEmployeesCoverage(searchFor) {
  if (searchFor) {
    const [search] = Object.values(searchFor);
    const employee = findEmployee(search);
    if (!employee) throw new Error('Informações inválidas');
    return createObj(employee);
  }
  return data.employees.map((employee) => createObj(employee));
}

// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c' }));

module.exports = getEmployeesCoverage;
