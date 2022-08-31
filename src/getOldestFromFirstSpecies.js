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

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
