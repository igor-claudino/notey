const routes = require("express").Router();

const SessionController = require("./app/controllers/SessionController");
const UserController = require("./app/controllers/UserController");

routes.use("/sessions", SessionController);
routes.use("/users", UserController);

module.exports = routes;
