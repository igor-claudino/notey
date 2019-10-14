const faker = require("faker");
const { factory } = require("factory-girl");
const { User, Note } = require("../src/app/models");

factory.define("User", User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
});

factory.define("Note", Note, {
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
  tags: `${faker.random.word()}, ${faker.random.word()}, ${faker.random.word()}`
});

module.exports = factory;
