const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Should call localStorage.setItem', async () => {
    const myLi = '<ol><li>Item</li></ol>';
    await saveCartItems(myLi);

    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Should call localStorage.setItem with "cartItems" and myLi', async () => {
    const myLi = '<ol><li>Item</li></ol>';
    await saveCartItems(myLi);

    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', myLi);
  });
});
