const request = require("request");

const url = "https://jqlfg7lee8.execute-api.ap-south-1.amazonaws.com/products";

describe("Get products", () => {
  it("should return 200", (done) => {
    request.get(url, (err, res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });

  it("should return product list", (done) => {
    request.get(url, (err, res) => {
      expect(res.body.length).toBeGreaterThan(0);
      done();
    });
  });
});
