const fetchItem = async (itemId) => {
  const URL = `https://api.mercadolibre.com/items/${itemId}`;

  const result = await fetch(URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
  
  return result;
};

// fetchItem('MLB1341706310');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
