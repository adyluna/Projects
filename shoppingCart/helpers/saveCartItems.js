const saveCartItems = async (item) => localStorage.setItem('cartItems', item);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
