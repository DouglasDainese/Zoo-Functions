const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, idade) {
  const especies = data.species.filter((value) => animal.includes(value.name))[0].residents;
  const idades = especies.every((element) => element.age >= idade);
  return idades;
}

getAnimalsOlderThan('tigers', 10);
module.exports = getAnimalsOlderThan;
