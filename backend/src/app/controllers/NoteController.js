const routes = require("express").Router();

const NoteService = require("../services/NoteService");
const authMiddleware = require("../middleware/auth");

routes.post("/", authMiddleware, NoteService.store);
routes.get("/", authMiddleware, NoteService.index);
routes.put("/:id", authMiddleware, NoteService.update);
routes.delete("/:id", authMiddleware, NoteService.destroy);

module.exports = routes;
