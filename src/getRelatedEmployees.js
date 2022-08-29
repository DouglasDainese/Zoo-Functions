const data = require('../data/zoo_data');

function isManager(id) {
  if (id === '9e7d4524-363c-416a-8759-8aa7e50c0992' || id === 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
|| id === '0e7b460e-acf4-4e17-bcb3-ee472265db83') {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const colabsFilter = data.employees.filter((pessoa) => pessoa.managers.includes(managerId));
    const subordinados = [];
    colabsFilter.forEach((pessoa) => subordinados.push(`${pessoa.firstName} ${pessoa.lastName}`));
    return subordinados;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc08'));

module.exports = { isManager, getRelatedEmployees };
