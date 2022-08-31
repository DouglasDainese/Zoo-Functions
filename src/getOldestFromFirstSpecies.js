const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const colabSpecie = data.employees.find((pessoa) => pessoa.id === id).responsibleFor[0];
  const animalById = data.species.find((animal) => animal.id === colabSpecie).residents;
  let animalMaisVelho = [];
  let older = 0;
  animalById.forEach((individuo) => {
    if (individuo.age > older) {
      older = individuo.age;
      animalMaisVelho = Object.values(individuo);
    }
  });
  return animalMaisVelho;
}

console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = getOldestFromFirstSpecies;
