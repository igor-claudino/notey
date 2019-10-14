// index, show, store, update, destroy
const { Op } = require("sequelize");

const { Note, User } = require("../models");

class NoteService {
  async index(req, res) {
    const { qry } = req.query;
    const user_id = req.userId;

    if (qry) {
      const notes = await Note.findAll({
        where: {
          [Op.or]: [
            {
              title: {
                [Op.substring]: qry
              }
            },
            {
              content: {
                [Op.substring]: qry
              }
            },
            {
              tags: {
                [Op.substring]: qry
              }
            }
          ],
          user_id
        }
      });

      return res.json({ notes });
    }

    const notes = await Note.findAll({
      where: {
        user_id
      }
    });

    return res.json({ notes });
  }

  async store(req, res) {
    const { title, content, tags } = req.body;

    if ((!content || content === "") && (!title || title === ""))
      return res
        .status(400)
        .json({ messsage: "A nota deve ter um título ou conteúdo." });

    const user_id = req.userId;

    const user = await User.findByPk(user_id);

    if (!user)
      return res.status(404).json({ messsage: "Usuário não encontrado." });

    const note = await Note.create({
      title,
      content,
      tags,
      user_id: user.id
    });

    return res.status(201).json(note);
  }

  async update(req, res) {
    const { id } = req.params;
    const user_id = req.userId;

    const { title, content, tags } = req.body;

    if ((!content || content === "") && (!title || title === ""))
      return res
        .status(400)
        .json({ messsage: "A nota deve ter um título ou conteúdo." });

    const note = await Note.findByPk(id);

    if (!note) {
      return res.status(404).json({ messsage: "Nota não encontrada." });
    }

    if (note.user_id != user_id) {
      return res
        .status(401)
        .json({ messsage: "Você não tem permissão para alterar esta nota" });
    }

    note.title = title;
    note.content = content;
    note.tags = tags;

    await note.save();

    return res.json({ note });
  }

  async destroy(req, res) {
    const { id } = req.params;
    const user_id = req.userId;

    const note = await Note.findByPk(id);

    if (!note) {
      return res.status(404).json({ messsage: "Nota não encontrada." });
    }

    if (note.user_id != user_id) {
      return res
        .status(401)
        .json({ messsage: "Você não tem permissão para excluir esta nota" });
    }

    await note.destroy();

    return res.status(204).send();
  }
}

module.exports = new NoteService();
