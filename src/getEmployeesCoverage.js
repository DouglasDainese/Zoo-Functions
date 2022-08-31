const data = require('../data/zoo_data');

// {
//   "id":  "c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1",
//   "fullName":  "Nigel Nelson",
//   "species": [ "lions", "tigers" ],
//   "locations": [ "NE", "NW" ],
// },

const todosColab = (param) => data.employees.map((colab) => ({
  id: colab.id,
  fullName: `${colab.firstName} ${colab.lastName}`,
  species: data.species.filter((animais) => colab.responsibleFor.includes(animais.id))
    .map((name) => name.name),
  locations: data.species.filter((animais) => colab.responsibleFor.includes(animais.id))
    .map((localização) => localização.location),
}));

function getEmployeesCoverage(param) {
  if (param === undefined) return todosColab();
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
