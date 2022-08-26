const data = require('../data/zoo_data');

// const { species } = data;

// console.log(data);

function getSpeciesByIds(...rest) {
  return data.species.filter((value) => rest.includes(value.id));
}

module.exports = getSpeciesByIds;
