const { User, Note, SharedNote } = require("../models");

class SharedNoteService {
  async index(req, res) {
    const user_id = req.userId;

    const sharedNotes = await SharedNote.findAll({
      where: {
        user_id
      },
      include: [
        {
          model: Note
        }
      ]
    });

    return res.json({ sharedNotes });
  }

  async store(req, res) {
    const { email } = req.body;
    const { id } = req.params;
    const user_id = req.userId;

    const user = await User.findOne({
      where: {
        email
      }
    });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Não foi encontrado usuário com este e-mail." });
    }

    const note = await Note.findByPk(id, { include: [{ all: true }] });

    if (!note) {
      return res.status(404).json({ message: "Nota não encontrada." });
    }

    if (note.user_id != user_id) {
      return res.status(403).json({
        message: "Você não tem permissão para compartilhar esta nota."
      });
    }

    const existsSharedNote = await SharedNote.findOne({
      where: {
        user_id: user.id,
        note_id: note.id
      }
    });

    if (existsSharedNote) {
      return res.status(400).json({
        message: "Essa nota já está compartilhada com este usuário"
      });
    }

    const sharedNote = await SharedNote.create({
      user_id: user.id,
      note_id: note.id
    });

    return res.status(201).json({ sharedNote });
  }

  async destroy(req, res) {
    const { id } = req.params;
    const { user } = req.query;

    const sharedNote = await SharedNote.findOne({
      where: {
        user_id: user,
        note_id: id
      }
    });

    if (!sharedNote) {
      return res.status(404).json({
        message: "Compartilhamento de nota não existe."
      });
    }

    await sharedNote.destroy();

    return res.status(204).send();
  }
}

module.exports = new SharedNoteService();
