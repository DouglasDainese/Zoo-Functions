const data = require('../data/zoo_data');

const entrants = [
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
];

function countEntrants(visitantes) {
  return visitantes.reduce((total, visitante) => {
    const propriedade = total;
    if (visitante.age < 18) {
      propriedade.child += 1;
    }
    if (visitante.age >= 18 && visitante.age < 50) {
      propriedade.adult += 1;
    }
    if (visitante.age >= 50) {
      propriedade.senior += 1;
    }
    return propriedade;
  }, { child: 0, adult: 0, senior: 0 });
}

const totalVisitantes = (visitante) => {
  let totalPorIdade = Object.values(visitante);
  totalPorIdade = (totalPorIdade[0] * data.prices.child)
  + (totalPorIdade[1] * data.prices.adult) + (totalPorIdade[2] * data.prices.senior);
  return totalPorIdade;
};

const calculateEntry = (visitantes) => {
  const result = (visitantes === 0 || visitantes === undefined || visitantes.length === undefined)
    ? 0 : totalVisitantes(countEntrants(visitantes));
  return result;
};

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
