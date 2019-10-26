const routes = require("express").Router();

const UserService = require("../services/UserService");
const authMiddleware = require("../middleware/auth");

routes.post("/", UserService.store);
routes.get("/", UserService.show);
routes.put("/:id", authMiddleware, UserService.update);

module.exports = routes;
