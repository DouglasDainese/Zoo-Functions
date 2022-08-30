const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Ao receber parametro nenhum a função deve retornar um array contendo um objeto com todos os horarios de funcionamento', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Ao receber o paramentro argumentos Monday e 09:00-AM deve retornar a string The zoo is closed (Já que o Zoo está sempre fechado na segunda)', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Ao receber o paramentro de um horario em que o zoo estiver aberto devera retornar: The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Verificar se a função não faz diferenciação entre maiúsculas e minúsculas', () => {
    expect(getOpeningHours('tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('TUESDAY', '01:00-AM')).toBe('The zoo is closed');
  });
  it('Ao receber o paramentro errado deve lançar uma exceção com a mensagem de erro', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('Ao receber o paramentro errado deve lançar uma exceção com a mensagem de erro 2', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Ao receber o paramentro errado deve lançar uma exceção com a mensagem de erro 3', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError(new Error('The hour should represent a number'));
  });
  it('Ao receber o paramentro errado deve lançar uma exceção com a mensagem de erro 4', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
  it('Ao receber o paramentro de hora com minutos acima de 60 deve lançar uma exceção com a mensagem de erro 5', () => {
    expect(() => getOpeningHours('Sunday', '09:80-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
  it('Ao receber o paramentro de hora modelo 24h deve lançar uma exceção com a mensagem de erro 6', () => {
    expect(() => getOpeningHours('Sunday', '14:00-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
});
