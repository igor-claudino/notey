const routes = require("express").Router();

const SessionController = require("./app/controllers/SessionController");
const UserController = require("./app/controllers/UserController");
const NoteController = require("./app/controllers/NoteController");

routes.use("/sessions", SessionController);
routes.use("/users", UserController);
routes.use("/notes", NoteController);

module.exports = routes;
