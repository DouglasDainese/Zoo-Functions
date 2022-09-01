const data = require('../data/zoo_data');

const returnGeneration = (colab) => ({
  id: colab.id,
  fullName: `${colab.firstName} ${colab.lastName}`,
  species: data.species.filter((animais) => colab.responsibleFor.includes(animais.id))
    .map((name) => name.name),
  locations: data.species.filter((animais) => colab.responsibleFor.includes(animais.id))
    .map((localização) => localização.location),
});

const getColabByName = (param) => {
  if (!data.employees.some((colaboradores) => colaboradores.firstName
    .includes(param.name)) && !data.employees.some((colaboradores) => colaboradores.lastName
    .includes(param.name))) {
    throw new Error('Informações inválidas');
  }
  const colab = data.employees.find((valor) => param.name
    .includes(valor.firstName) || param.name.includes(valor.lastName));
  return returnGeneration(colab);
};

const getColabById = (param) => {
  if (!data.employees.some((colaboradores) => colaboradores.id
    .includes(param.id))) {
    throw new Error('Informações inválidas');
  }
  const colab = data.employees.find((valor) => param.id.includes(valor.id));
  return returnGeneration(colab);
};

function getEmployeesCoverage(param) {
  if (param === undefined) return data.employees.map((colab) => returnGeneration(colab));
  const parametro = Object.keys(param);
  if (parametro[0] === 'name') return getColabByName(param);
  if (parametro[0] === 'id') return getColabById(param);
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
