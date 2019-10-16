// index, show, store, update, destroy

const { User } = require("../models");

class UserService {
  async store(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res
        .status(400)
        .json({ message: "Todos os campos devem ser preenchidos." });

    const userDb = await User.findOne({
      where: {
        email
      }
    });

    if (userDb) {
      return res
        .status(409)
        .json({ message: "Já existe uma conta com este e-mail." });
    }

    const user = await User.create({
      name,
      email,
      password
    });

    user.password = user.password_hash = undefined;

    return res.status(201).json({ user, token: user.generateToken() });
  }

  async update(req, res) {
    const { id } = req.params;

    const { email, name, password } = req.body;

    if (id != req.userId) {
      return res
        .status(403)
        .json({ message: "Você não tem permissão para alterar este usuário" });
    }

    const user = await User.findByPk(id);
    user.email = email;
    user.name = name;
    if (password) user.password = password;
    await user.save();

    user.password = user.password_hash = undefined;

    return res.json({ user });
  }
}

module.exports = new UserService();
