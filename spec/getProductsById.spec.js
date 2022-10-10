const request = require("request");

const url = "https://jqlfg7lee8.execute-api.ap-south-1.amazonaws.com/products";

describe("Get product by id", () => {
  it("should return 200", (done) => {
    request.get(`${url}/5`, (err, res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });

  it("should return product list", (done) => {
    request.get(`${url}/10`, (err, res) => {
      expect(JSON.parse(res.body).product_name).toEqual("Bay Leaf Ground");
      done();
    });
  });

  it("should return product not found", (done) => {
    request.get(`${url}/50`, (err, res) => {
      expect(res.body).toEqual("Product not found");
      done();
    });
  });
});
