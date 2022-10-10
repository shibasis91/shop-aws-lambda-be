const productList = require("../mock/productList");

function fetchProductById(id) {
  const { products } = productList;
  const item = products.filter((product) => product.id === id);
  return item;
}

exports.getProductsById = async (event, context) => {
  try {
    const id = parseInt(event.pathParameters.id);
    const result = await fetchProductById(id);
    if (result.length) {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result[0]),
      };
    } else {
      throw {message: "Product not found"};
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: error.message,
    };
  }
};
