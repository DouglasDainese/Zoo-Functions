const data = require('../data/zoo_data');

const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((value) => employeeName.includes(value.firstName)
  || employeeName.includes(value.lastName));
}

console.log(getEmployeeByName('Burl'));

module.exports = getEmployeeByName;
