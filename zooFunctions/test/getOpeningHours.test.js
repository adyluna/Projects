const getOpeningHours = require('../src/getOpeningHours');

const dayError = 'The day must be valid. Example: Monday';
const dayHours = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  it('Testa se sem argumentos a funcao retorna um objeto com os dias e horarios disponiveis', () => {
    expect(getOpeningHours()).toEqual(dayHours);
  });
  it('Testa se passando Monday e 09:00-AM retorna zoologico fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Testa se passando Tuesday e 09:00-AM retorna zoologico aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Testa se passando Tuesday e 09:00-PM retorna zoologico fechado', () => {
    expect(getOpeningHours('Tuesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Testa se passando uma hora que não seja numero, retorna um erro', () => {
    expect(() => getOpeningHours('Tuesday', 'AB:00-PM')).toThrow('The hour should represent a number');
  });
  it('Testa se passando um minutos que não sejam números, retorna um erro', () => {
    expect(() => getOpeningHours('Tuesday', '09:00-ZA')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testa se passando uma hora maior que 12, retorna um erro', () => {
    expect(() => getOpeningHours('Tuesday', '19:00-PM')).toThrow('The hour must be between 0 and 12');
  });
  it('Testa se passando minutos maior que 60, retorna um erro', () => {
    expect(() => getOpeningHours('Tuesday', '09:200-PM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Testa se passando um dia da semana não existente, retorna um erro', () => {
    expect(() => getOpeningHours('Someday', '09:200-PM')).toThrow(dayError);
  });
});
