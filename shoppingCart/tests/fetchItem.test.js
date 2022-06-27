require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Should be a function', async () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Should fetch with URL', async () => {
    const URL = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');

    expect(fetch).toBeCalledWith(URL);
  });
  it('Should equals item', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  it('Should error message "You must provide an url"', async () => {
    const expectedError = new Error('You must provide an url');
    
    expect(await fetchItem()).toEqual(expectedError);
  });
});
