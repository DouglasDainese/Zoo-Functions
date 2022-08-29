const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Ao receber o parametro nome deve retornar um array contendo os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Ao receber o paramentro averageAge deve retornar a média da idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Ao receber o paramentro count deve retornar o numero total de elefantes residentes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Ao receber o paramentro que for uma chave de objeto deve retornar os respectivos valores', () => {
    expect(handlerElephants('location')).toContain('NW');
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Ao receber o paramentro diferente de strig deve retornar um erro: Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(9)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Ao receber o paramentro invalido deve retornar null', () => {
    expect(handlerElephants('d')).toEqual(null);
  });
  it('Ao receber o paramentro undefined deve retornar undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
});
