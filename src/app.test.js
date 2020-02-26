const request = require("supertest");
const app = require("./app");

describe("app.js", () => {
  it("GET / should return the first 9 numbers the triangular number sequence", async () => {
    const expectedData = [1, 3, 6, 10, 15, 21, 28, 36, 45];
    const { body: response } = await request(app)
      .get("/")
      .expect(200);
    expect(response).toEqual(expectedData);
  });

  it("GET /:number should return the result of number to the power of 8 ", async () => {
    const expectedAnswer = 16777216;
    const { body: response } = await request(app)
      .get("/8")
      .expect(200);
    expect(response).toEqual(expectedAnswer);
  });
});
