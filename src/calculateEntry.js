const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
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
  let totalPessoas = Object.values(visitante);
  totalPessoas = (totalPessoas[0] * 20.99) + (totalPessoas[1] * 49.99) + (totalPessoas[2] * 24.99);
  return totalPessoas;
};

const calculateEntry = (visitantes) => {
  const result = (visitantes === 0 || visitantes === undefined || visitantes.length === undefined)
    ? 0 : totalVisitantes(countEntrants(visitantes));
  return result;
};

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
