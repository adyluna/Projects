const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se o parametro "names" retorna um array com os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa se o parametro "averageAge" retorna a 10,5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Testa se o parametro "count" retorna a 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se quando não é passado parametro, a função retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Testa se quando o parametro passado não for uma string, retorna "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(8)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se quando o parametro passado não for uma propriedade existinte, retorna null"', () => {
    expect(handlerElephants('nãoexisto')).toBe(null);
  });
  it('Testa se quando o parametro passado for uma propriedade existente, retorna o valor dela"', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
});
