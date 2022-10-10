const productList = require("../mock/productList");

function getProducts() {
  return productList.products;
}

exports.getProductsList = async (event, context) => {
  try {
    const result = await getProducts();
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: error.message,
    };
  }
};
