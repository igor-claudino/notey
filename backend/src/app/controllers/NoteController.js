const routes = require("express").Router();

const NoteService = require("../services/NoteService");
const SharedNoteService = require("../services/SharedNoteService");
const authMiddleware = require("../middleware/auth");

routes.post("/", authMiddleware, NoteService.store);
routes.get("/", authMiddleware, NoteService.index);
routes.put("/:id", authMiddleware, NoteService.update);
routes.delete("/:id", authMiddleware, NoteService.destroy);
routes.get("/share", authMiddleware, SharedNoteService.index);
routes.post("/:id/share", authMiddleware, SharedNoteService.store);
routes.delete("/:id/share", authMiddleware, SharedNoteService.destroy);

module.exports = routes;
