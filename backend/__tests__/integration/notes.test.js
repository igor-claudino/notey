const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory = require("../factories");
const faker = require("faker");

describe("Notes", () => {
//   beforeEach(async () => {
//     await truncate();
//   });

  it("should create a note with jwt token", async () => {
    const user = await factory.create("User");
    const token = user.generateToken();
    const response = await request(app)
      .post("/notes")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(),
        tags: `${faker.random.word()}, ${faker.random.word()}, ${faker.random.word()}`
      });

    expect(response.status).toBe(201);
  });

  it("should not create a note without jwt token", async () => {
    const response = await request(app)
      .post("/notes")
      .send({
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(),
        tags: `${faker.random.word()}, ${faker.random.word()}, ${faker.random.word()}`
      });

    expect(response.status).toBe(401);
  });

  it("should create a note with title", async () => {
    const user = await factory.create("User");
    const token = user.generateToken();
    const response = await request(app)
      .post("/notes")
      .set("Authorization", `Bearer ${token}`)
      .send({
        content: faker.lorem.paragraphs(),
        tags: `${faker.random.word()}, ${faker.random.word()}, ${faker.random.word()}`
      });

    expect(response.status).toBe(201);
  });

  it("should not create a note without content", async () => {
    const user = await factory.create("User");
    const token = user.generateToken();
    const response = await request(app)
      .post("/notes")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: faker.lorem.sentence(),
        tags: `${faker.random.word()}, ${faker.random.word()}, ${faker.random.word()}`
      });

    expect(response.status).toBe(400);
  });
});
