const fetchProducts = async (product) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;

  const result = await fetch(URL)
    .then((response) => response.json())
    .then((data) => data.results) // once was Object.values(data.results)
    .catch((error) => error);

  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
