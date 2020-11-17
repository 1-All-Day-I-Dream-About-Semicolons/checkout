const app = require('/home/rolo/Documents/SEI-hrsf131/checkout/server/app.js');
const expectedObj = require('/home/rolo/Documents/SEI-hrsf131/checkout/Tests/sampleObj.js');

const request = require("supertest");



describe("It should return a response to a GET method", () => {
  test("when sending a GET request for a specific productID, it should return an object with the same id", done => {
    request(app)
      .get("/api/products/99/")
      .then(response => {
        expect(response.body[0]).toStrictEqual(expectedObj);
        done();
      });
  });
  test("An invalid id should return a 404 message", done => {
    request(app)
      .get("/api/products/-1/")
      .then(response => {
        expect(response.status).toBe(404);
        done();
      });
  });
});