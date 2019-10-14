const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const faker = require("faker");
const factory = require("../factories");

describe("Users", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should register a new user with valid fields", async () => {
    const response = await request(app)
      .post("/users")
      .send({
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.name.findName()
      });

    expect(response.status).toBe(201);
  });

  it("should not register a new user with invalid fields", async () => {
    const response = await request(app)
      .post("/users")
      .send({
        email: faker.internet.email(),
        password: faker.internet.password()
      });

    expect(response.status).toBe(400);
  });

  it("should not register a new user with a email that already exists", async () => {
    const user = await factory.create("User");

    const response = await request(app)
      .post("/users")
      .send({
        email: user.email,
        password: faker.internet.password(),
        name: faker.name.findName()
      });

    expect(response.status).toBe(409);
  });

  it("should update a user that is authenticated", async () => {
    const user = await factory.create("User");

    const token = user.generateToken();

    const response = await request(app)
      .put(`/users/${user.id}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        email: user.email,
        password: faker.internet.password(),
        name: faker.name.findName()
      });

    expect(response.status).toBe(200);
  });

  it("should not update a user that is different than authenticated user", async () => {
    const user = await factory.create("User");

    const token = user.generateToken();

    const response = await request(app)
      .put(`/users/131313213`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        email: user.email,
        password: faker.internet.password(),
        name: faker.name.findName()
      });

    expect(response.status).toBe(401);
  });

  it("should not update a user without a jwt token", async () => {
    const user = await factory.create("User");

    const response = await request(app)
      .put(`/users/${user.id}`)
      .send({
        email: user.email,
        password: faker.internet.password(),
        name: faker.name.findName()
      });

    expect(response.status).toBe(401);
  });

  it("should not update a user with a invalid jwt token", async () => {
    const user = await factory.create("User");

    const response = await request(app)
      .put(`/users/${user.id}`)
      .set("Authorization", `Bearer kasdkjaskdj`)
      .send({
        email: user.email,
        password: faker.internet.password(),
        name: faker.name.findName()
      });

    expect(response.status).toBe(401);
  });
});
