const data = require('../data/zoo_data');

// const { species } = data;

// console.log(data);

function getSpeciesByIds(...rest) {
  // requisito concluído com auxilio das mentorias
  return data.species.filter((value) => rest.includes(value.id));
}

module.exports = getSpeciesByIds;
