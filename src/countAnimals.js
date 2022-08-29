const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function checkParam(param) {
  return (typeof param === 'object') ? Object.keys(param).length : undefined;
}

const animalsPorEspécies = (animal) => species.reduce((total, especie) => {
  let propriedade = total;
  if (especie.name === animal.specie) {
    propriedade += especie.residents.length;
  }
  return propriedade;
}, 0);

const animalsPorSex = (animal) => species.reduce((total, especie) => {
  let propriedade = total;
  if (especie.name === animal.specie) {
    propriedade = especie.residents.filter((sexAnimal) => sexAnimal.sex === animal.sex).length;
  }
  return propriedade;
}, 0);

function countAnimals(animal) {
  if (checkParam(animal) === undefined) {
    return data.species.reduce((total, especie) => {
      const propriedade = total;
      if (!total[especie.name]) {
        propriedade[especie.name] = especie.residents.length;
      }
      return total;
    }, {});
  }
  if (checkParam(animal) === 1) {
    return animalsPorEspécies(animal);
  }
  return animalsPorSex(animal);
}

console.log(countAnimals({ specie: 'giraffes' }));
module.exports = countAnimals;
