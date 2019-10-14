const routes = require("express").Router();
const { User } = require("./app/models");

User.create({
  name: "Igor Claudino",
  email: "igor.claudino.ic@gmail.com",
  password_hash: "123456"
})
  .then(() => console.log("OK"))
  .catch(err => console.log(err));

module.exports = routes;
