require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Should be a function', async () => {
        
    expect(typeof fetchProducts).toBe('function');
  });
  it('Should call fetch 1 time', async () => {
    const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    
    await fetchProducts('computador');
    expect(fetch).toBeCalledTimes(1);
  });
  it('Should be called with URL', async () => {
    const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(URL);
  });
  it('Should be equal do computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch.results);
  });
  it('Should return "You must provide an url" if called without arguments', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  });
});
