const data = require('../data/zoo_data');

// {
//   "id":  "c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1",
//   "fullName":  "Nigel Nelson",
//   "species": [ "lions", "tigers" ],
//   "locations": [ "NE", "NW" ],
// },

const getAllColab = (param) => data.employees.map((colab) => ({
  id: colab.id,
  fullName: `${colab.firstName} ${colab.lastName}`,
  species: data.species.filter((animais) => colab.responsibleFor.includes(animais.id))
    .map((name) => name.name),
  locations: data.species.filter((animais) => colab.responsibleFor.includes(animais.id))
    .map((localização) => localização.location),
}));

const getColabByName = (param) => {
  if (!data.employees.some((colaboradores) => colaboradores.firstName
    .includes(param.name)) && !data.employees.some((colaboradores) => colaboradores.lastName
    .includes(param.name))) {
    throw new Error('Informações inválidas');
  }
  const colab = data.employees.find((valor) => param.name
    .includes(valor.firstName) || param.name.includes(valor.lastName));
  return {
    id: colab.id,
    fullName: `${colab.firstName} ${colab.lastName}`,
    species: data.species.filter((animais) => colab.responsibleFor.includes(animais.id))
      .map((name) => name.name),
    locations: data.species.filter((animais) => colab.responsibleFor.includes(animais.id))
      .map((localização) => localização.location),
  };
};

const getColabById = (param) => {
  if (!data.employees.some((colaboradores) => colaboradores.id
    .includes(param.id))) {
    throw new Error('Informações inválidas');
  }
  const colab = data.employees.find((valor) => param.id.includes(valor.id));
  return {
    id: colab.id,
    fullName: `${colab.firstName} ${colab.lastName}`,
    species: data.species.filter((animais) => colab.responsibleFor.includes(animais.id))
      .map((name) => name.name),
    locations: data.species.filter((animais) => colab.responsibleFor.includes(animais.id))
      .map((localização) => localização.location),
  };
};

function getEmployeesCoverage(param) {
  if (param === undefined) return getAllColab(param);
  const parametro = Object.keys(param);
  if (parametro[0] === 'name') return getColabByName(param);
  if (parametro[0] === 'id') return getColabById(param);
}

console.log(getEmployeesCoverage({ name: 'Strauss' }));

module.exports = getEmployeesCoverage;
