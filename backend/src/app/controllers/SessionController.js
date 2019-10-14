const routes = require("express").Router();

const SessionService = require("../services/SessionService");

routes.post("/", SessionService.store);

module.exports = routes;
