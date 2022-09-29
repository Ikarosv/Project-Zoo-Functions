const data = require('../data/zoo_data');

function isManager(id) {
  return !!data.employees.find(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return data.employees.reduce((arrFinal, currEmploye) => {
    if (currEmploye.managers.includes(managerId)) {
      arrFinal.push(`${currEmploye.firstName} ${currEmploye.lastName}`);
    }
    return arrFinal;
  }, []);
}

// console.log(getRelatedEmployees('d'));

module.exports = { isManager, getRelatedEmployees };
